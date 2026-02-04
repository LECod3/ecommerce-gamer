# Ecommerce Gaming - Rolling Code Gaming Store

A modern, responsive e-commerce platform for video games built with React and Vite. This project serves as the final deliverable for Module 2 of the Rolling Code Academy Web Development Bootcamp (Group 1 - Commission w19 2025).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Demo Credentials](#demo-credentials)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Overview

Rolling Code Gaming Store is a full-featured e-commerce web application that allows users to browse, filter, and explore a curated catalog of video games. The platform includes an administrative panel for managing the game inventory, complete with role-based access control.

## Features

### User Features
- Browse a comprehensive catalog of games with pagination
- Filter games by category, search by title, and sort by price
- View detailed information about each game including requirements, ratings, and reviews
- Responsive design optimized for desktop, tablet, and mobile devices
- Featured carousels for new releases and special offers
- Dynamic discount system with visual price comparisons

### Admin Features
- Secure admin panel with role-based authentication
- Create, edit, and delete game entries
- Manage game metadata (price, stock, categories, images, etc.)
- Protected routes accessible only to administrators

## Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Routing:** React Router DOM 7.12.0
- **UI Framework:** React Bootstrap 2.10.10
- **Styling:** Bootstrap 5.3.8 + Custom CSS
- **Icons:** Bootstrap Icons, React Icons
- **State Management:** React Context API

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/your-username/ecommerce-gaming-rolling.git
cd ecommerce-gaming-rolling
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Usage

### Development

Run the development server with hot module replacement:
```bash
npm run dev
```

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
ecommerce-gaming-rolling/
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # React Context providers
│   ├── data/             # Static game data
│   ├── pages/            # Page-level components
│   ├── services/         # API services and utilities
│   ├── styles/           # CSS stylesheets
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

## Demo Credentials

### Administrator Access
- **Email:** admin@admin.com
- **Password:** any (authentication is simulated)
- **Access:** Full admin panel access

### Regular User Access
- **Email:** any email except admin@admin.com
- **Password:** any (authentication is simulated)
- **Access:** Standard user features only

Note: This is a frontend-only application with simulated authentication for demonstration purposes.

## Contributing

This is an academic project developed as part of the Rolling Code Academy curriculum. Contributions, suggestions, and feedback are welcome.

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Luciano Caro & Alexis Arreyes - Rolling Code Academy (Commission w19)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Authors

Developed by:
- **Luciano Caro**
- **Alexis Arreyes**

**Academic Institution:** [Rolling Code Academy](https://rollingcodeschool.com/)  
**Commission:** w19 2025  
**Professor:** Gonzalo Flamenci
**Professor:** Matias Saade

---

For questions or support regarding this project, please contact the development team or your instructor.
