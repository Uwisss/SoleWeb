const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build process...');

// Install PHP dependencies if composer.json exists
if (fs.existsSync('composer.json')) {
  console.log('Installing PHP dependencies...');
  execSync('composer install --no-dev --optimize-autoloader', { stdio: 'inherit' });
}

// Install Node.js dependencies
console.log('Installing Node.js dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Run the build script
console.log('Running build script...');
execSync('npm run build', { stdio: 'inherit' });

// Generate the application key if it doesn't exist
if (!fs.existsSync('.env')) {
  console.log('Creating .env file...');
  fs.copyFileSync('.env.example', '.env');
  execSync('php artisan key:generate', { stdio: 'inherit' });
}

// Cache routes and config
console.log('Caching configuration...');
try {
  execSync('php artisan config:cache', { stdio: 'inherit' });
  execSync('php artisan route:cache', { stdio: 'inherit' });
  execSync('php artisan view:cache', { stdio: 'inherit' });
} catch (error) {
  console.warn('Warning: Could not cache configuration');
}

console.log('Build process completed!');
