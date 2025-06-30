<h1 align="center">SoleWeb</h1>

<p align="center">
  <strong>Your Ultimate Travel Experience Platform</strong>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel"></a>
  <a href="#"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
  <a href="#"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
</p>

## About SoleWeb

SoleWeb is a modern travel booking platform built with Laravel and React, designed to provide users with a seamless experience for discovering and booking travel packages, cruises, and vacation deals.

## Features

- 🚢 Cruise package browsing and booking
- ✈️ Travel deals and special offers
- 🏨 Hotel and accommodation options
- 📱 Responsive design for all devices
- 🔐 Secure user authentication
- 📊 Admin dashboard for management
- 🔍 Advanced search and filtering
- 🌟 User reviews and ratings

## Tech Stack

- **Backend**: Laravel 10.x
- **Frontend**: React 18, Inertia.js
- **Styling**: Tailwind CSS
- **Database**: MySQL/PostgreSQL
- **Authentication**: Laravel Sanctum
- **Deployment**: Ready for Vercel/Forge/Envoyer

## Getting Started

### Prerequisites

- PHP 8.1+
- Composer
- Node.js 16+
- MySQL/PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/soleweb.git
   cd soleweb
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install JavaScript dependencies:
   ```bash
   npm install
   ```

4. Create and configure `.env` file:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. Configure your database in `.env`

6. Run migrations and seed the database:
   ```bash
   php artisan migrate --seed
   ```

7. Start the development servers:
   ```bash
   # Start Laravel server
   php artisan serve
   
   # In a new terminal, start Vite
   npm run dev
   ```

8. Visit `http://localhost:8000` in your browser

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Security Vulnerabilities

If you discover a security vulnerability, please send an e-mail to the maintainers. All security vulnerabilities will be promptly addressed.

## Credits

- [Laravel](https://laravel.com/)
- [React](https://reactjs.org/)
- [Inertia.js](https://inertiajs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
