# KAF - Luxury Coffee Experience

A premium, bilingual (English/Arabic) coffee shop website built with React and Vite, featuring a sophisticated dark theme with gold accents and full RTL support.

## ✨ Features

### 🌍 Bilingual Support
- **English & Arabic** with seamless language switching
- Full **RTL (Right-to-Left)** layout support for Arabic
- Dynamic content translation across all pages

### 🎨 Premium Design
- **Matte Black** background with **Champagne Gold** accents
- **Glassmorphism** effects for modern UI elements
- **Responsive design** optimized for all screen sizes
- Smooth animations and transitions

### 🛍️ E-Commerce Features
- Interactive menu with category filters
- **Search functionality** for menu items (bilingual)
- Shopping cart with real-time updates
- Checkout process with delivery details
- User authentication pages

### 📱 Pages & Sections
- **Home**: Hero section with call-to-action buttons
- **Menu**: Searchable menu with category filters
- **About**: Brand story and philosophy
- **Contact**: Contact form with embedded map
- **Cart**: Shopping cart management
- **Checkout**: Multi-step checkout process
- **Auth**: Sign in / Sign up pages

### 🔍 SEO Optimized
- Custom meta tags and descriptions
- Optimized page titles
- Search engine friendly structure

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI components
- **i18next** - Internationalization
- **React Icons** - Icon library
- **Animate.css** - CSS animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/amerasamir/KAFF.git
cd KAFF
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.js` with your repository name:
```javascript
export default defineConfig({
  base: '/KAFF/', // Replace with your repo name
  // ... rest of config
})
```

2. Build the project:
```bash
npm run build
```

3. Deploy to GitHub Pages using the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

4. Add deployment scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

5. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
KAFF/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Contact.jsx
│   │   └── product/
│   │       └── Menu.jsx
│   ├── data/
│   │   └── menu.js
│   ├── locales/
│   │   ├── en.json
│   │   └── ar.json
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Auth.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── MenuPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── i18n.js
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Color Palette

- **Ebony (Background)**: `#0a0a0a`
- **Champagne Gold (Accent)**: `#E7D192`
- **Cream (Logo)**: `#F5F5DC`
- **White**: `#ffffff`

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

Built with ❤️ for KAF Coffee

---

**Note**: This is a demonstration project showcasing modern web development practices with React, Vite, and advanced CSS techniques.
