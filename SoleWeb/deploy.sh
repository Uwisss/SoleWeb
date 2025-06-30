#!/bin/bash

# Build the app
npm run build

# Create a temporary directory for the build
mkdir -p dist

# Copy built files to dist directory
cp -r public/* dist/

# Create a simple index.html for GitHub Pages
cat > dist/index.html << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sole Travel & Tours</title>
    <script type="module" crossorigin src="/SoleWeb/assets/index.js"></script>
    <link rel="stylesheet" href="/SoleWeb/assets/index.css">
</head>
<body>
    <div id="app"></div>
</body>
</html>
EOL

echo "Build complete! Now push to GitHub and enable GitHub Pages in settings."
