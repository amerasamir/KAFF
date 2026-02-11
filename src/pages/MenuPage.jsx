import React from 'react';
import MenuSection from '../components/product/Menu';

const MenuPage = ({ addToCart }) => {
    return (
        <div className="menu-page" style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--kaf-ebony)' }}>
            <MenuSection addToCart={addToCart} />
        </div>
    );
};

export default MenuPage;
