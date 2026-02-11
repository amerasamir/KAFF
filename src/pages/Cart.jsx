import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Cart = ({ cart, removeFromCart }) => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    if (cart.length === 0) {
        return (
            <div className="bg-ebony text-white" style={{ paddingTop: '160px', minHeight: '100vh' }}>
                <Container className="text-center animate__animated animate__fadeIn">
                    <div className="mb-5 opacity-20">
                        <FaShoppingBag size={80} />
                    </div>
                    <h2 className="display-4 fw-light mb-5" style={{ letterSpacing: '10px', textTransform: 'uppercase' }}>{t('cart.empty')}</h2>
                    <Button as={Link} to="/menu" className="btn-premium">{t('cart.cta_menu')}</Button>
                </Container>
            </div>
        );
    }

    return (
        <div className="bg-ebony text-white" style={{ paddingTop: '160px', minHeight: '100vh' }}>
            <Container className="pb-5">
                <h2 className="display-4 fw-light mb-5 animate__animated animate__fadeInLeft" style={{ letterSpacing: '15px', textTransform: 'uppercase' }}>
                    {t('cart.title')} <span className="text-gold">{t('cart.title_gold')}</span>
                </h2>

                <Row className="gy-5">
                    <Col lg={8}>
                        <div className="cart-items animate__animated animate__fadeInUp">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item-premium d-flex align-items-center justify-content-between mb-4 pb-4 border-bottom border-white border-opacity-10">
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="item-info">
                                            <h5 className="mb-1 fw-light" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>{isAr ? item.nameAr : item.name}</h5>
                                            <p className="mb-0 text-gold small fw-light" style={{ letterSpacing: '1px' }}>
                                                {item.price} EGP <span className="mx-2 opacity-50">×</span> {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-5">
                                        <div className="text-end">
                                            <span className="fw-light d-block" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>{item.price * item.quantity} EGP</span>
                                        </div>
                                        <button className="btn p-0 text-danger opacity-50 hover-opacity-100 transition-all border-0 bg-transparent" onClick={() => removeFromCart(item.id)}>
                                            <FaTrash size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="luxury-card p-4 p-md-5 animate__animated animate__fadeInRight position-sticky" style={{ top: '120px' }}>
                            <h4 className="fw-light mb-4 pb-2 border-bottom border-white border-opacity-10" style={{ letterSpacing: '4px', textTransform: 'uppercase' }}>{t('cart.order_summary')}</h4>

                            <div className="d-flex justify-content-between mb-3 fw-light" style={{ letterSpacing: '1px' }}>
                                <span className="opacity-70">{t('cart.subtotal')}</span>
                                <span>{subtotal.toFixed(2)} EGP</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4 fw-light" style={{ letterSpacing: '1px' }}>
                                <span className="opacity-70">{t('cart.tax')}</span>
                                <span>{tax.toFixed(2)} EGP</span>
                            </div>

                            <div className="pt-3 border-top border-white border-opacity-10 mb-5">
                                <div className="d-flex justify-content-between text-gold h5 fw-medium" style={{ letterSpacing: '1px' }}>
                                    <span>{t('cart.total')}</span>
                                    <span>{total.toFixed(2)} EGP</span>
                                </div>
                            </div>

                            <Button as={Link} to="/checkout" className="btn-premium w-100 py-3">
                                {t('cart.checkout')}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
