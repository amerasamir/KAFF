import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './index.css';

// Components
import Navigation from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import MenuSection from './components/product/Menu';
import Footer from './components/layout/Footer';
import Contact from './components/layout/Contact';

// Pages
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import About from './pages/About';
import MenuPage from './pages/MenuPage';
import Notification from './components/common/Notification';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  const clearCart = () => setCart([]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App d-flex flex-column min-vh-100">
        <Navigation cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
        <Notification message="Item added to selection" show={false} onClose={() => { }} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="py-5 my-lg-5">
                  <MenuSection addToCart={addToCart} />
                </div>
                <About />
                <Contact />
              </>
            } />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
