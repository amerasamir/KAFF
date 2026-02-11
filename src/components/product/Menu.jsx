import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { menuData } from '../../data/menu';

import { useTranslation } from 'react-i18next';

const MenuSection = ({ addToCart }) => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    const [activeCategory, setActiveCategory] = useState(menuData[0].category);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = menuData.map(c => ({ en: c.category, ar: c.categoryAr }));
    const activeData = menuData.find(c => c.category === activeCategory);

    // Filter items by search query
    const activeItems = (activeData?.items || []).filter(item => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return item.name.toLowerCase().includes(query) ||
            item.nameAr.includes(searchQuery) ||
            item.desc.toLowerCase().includes(query) ||
            item.descAr.includes(searchQuery);
    });

    return (
        <section className="py-5" id="menu" style={{ backgroundColor: 'var(--kaf-ebony)' }}>
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-light text-white mb-2" style={{ letterSpacing: '15px', textTransform: 'uppercase' }}>
                        {t('menu.title')} <span className="text-gold">{t('menu.title_gold')}</span>
                    </h2>
                    <div className="mx-auto" style={{ width: '40px', height: '1px', background: 'var(--kaf-gold)', opacity: '0.5' }}></div>
                </div>

                {/* Search Bar */}
                <Row className="justify-content-center mb-4">
                    <Col lg={10}>
                        <div className="position-relative">
                            <FaSearch
                                className="position-absolute text-gold"
                                style={{
                                    left: isAr ? 'auto' : '20px',
                                    right: isAr ? '20px' : 'auto',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    opacity: '0.5',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <Form.Control
                                type="text"
                                placeholder={t('menu.search_placeholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="text-white"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '0',
                                    padding: '15px 50px',
                                    fontSize: '0.85rem',
                                    letterSpacing: '2px',
                                    textAlign: isAr ? 'right' : 'left'
                                }}
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={10}>
                        {/* Category Filter - Premium Minimalist Style */}
                        <div className="d-flex justify-content-center flex-wrap gap-0 mb-5 border-bottom border-secondary border-opacity-10">
                            {categories.map((cat) => (
                                <Button
                                    key={cat.en}
                                    onClick={() => setActiveCategory(cat.en)}
                                    className={`px-4 py-3 border-0 transition-all rounded-0 ${activeCategory === cat.en ? 'text-gold' : 'text-white'}`}
                                    style={{
                                        fontSize: '0.75rem',
                                        letterSpacing: '3px',
                                        backgroundColor: 'transparent',
                                        color: activeCategory === cat.en ? 'var(--kaf-gold)' : 'var(--kaf-white)',
                                        borderBottom: activeCategory === cat.en ? '1px solid var(--kaf-gold)' : '1px solid transparent',
                                        fontWeight: activeCategory === cat.en ? '600' : '300',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {isAr ? cat.ar : cat.en}
                                </Button>
                            ))}
                        </div>

                        {/* Menu List - Ultra Modern Layout */}
                        <div className="px-3">
                            {activeItems.map((item) => (
                                <div key={item.id} className="menu-list-item py-4 border-bottom border-secondary border-opacity-10">
                                    <div className="menu-item-info">
                                        <div className="d-flex justify-content-between align-items-baseline mb-1">
                                            <h5 className="text-white mb-0 fw-medium" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem' }}>
                                                {isAr ? item.nameAr : item.name}
                                            </h5>
                                            <span className="menu-item-price" style={{ letterSpacing: '1px', fontSize: '1.1rem', fontWeight: '300' }}>{item.price} EGP</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="small mb-0 mt-1" style={{ color: '#888', fontWeight: '300', letterSpacing: '1px', maxWidth: '80%', fontStyle: isAr ? 'normal' : 'italic' }}>
                                                {isAr ? item.descAr : item.desc}
                                            </p>
                                            <Button
                                                variant="link"
                                                className="text-gold p-0 text-decoration-none fw-bold small tracking-wider"
                                                onClick={() => addToCart(item)}
                                                style={{ fontSize: '0.7rem', letterSpacing: '2px' }}
                                            >
                                                {isAr ? 'إضافة +' : 'ADD +'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MenuSection;
