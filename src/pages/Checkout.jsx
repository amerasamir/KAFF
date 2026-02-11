import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Checkout = ({ cart, clearCart }) => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [step, setStep] = useState(1);
    const [address, setAddress] = useState({ district: 'NARGES', street: '' });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const districts = [
        'NARGES', 'YASMEEN', 'LOTUS', 'LOTUS NORTH', 'LOTUS SOUTH', '90TH STREET',
        'CHOUEIFAT', 'REHAB', 'MADINATY', 'EL SHOROUK', 'EL BANAFSEG', 'GOLDEN SQUARE',
        'MIVIDA', 'CAIRO FESTIVAL CITY', 'MOUNTAIN VIEW', 'SOUTH ACADEMY',
        'DIPLOMATS', 'EL TAGAMOA EL AWAL', 'EL TAGAMOA EL KHAMES'
    ];

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
        nextStep();
    };

    const renderStep1 = () => (
        <div className="animate__animated animate__fadeIn">
            <h4 className="fw-light mb-4 pb-2 border-bottom border-white border-opacity-10" style={{ letterSpacing: '4px', textTransform: 'uppercase' }}>
                {t('checkout.review_title')} <span className="text-gold">{t('checkout.review_gold')}</span>
            </h4>
            <div className="mb-4">
                {cart.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between mb-3 fw-light" style={{ letterSpacing: '1px' }}>
                        <span className="opacity-70">{isAr ? item.nameAr : item.name} <small className="opacity-50">× {item.quantity}</small></span>
                        <span>{item.price * item.quantity} EGP</span>
                    </div>
                ))}
            </div>
            <div className="pt-3 border-top border-white border-opacity-10 mb-5">
                <div className="d-flex justify-content-between text-gold h5 fw-medium" style={{ letterSpacing: '1px' }}>
                    <span>{t('cart.total')}</span>
                    <span>{total.toFixed(2)} EGP</span>
                </div>
            </div>
            <Button className="btn-premium w-100 d-flex align-items-center justify-content-center gap-3" onClick={nextStep}>
                {t('checkout.cta_address')} <FaArrowRight size={12} style={{ transform: isAr ? 'rotate(180deg)' : 'none' }} />
            </Button>
        </div>
    );

    const renderStep2 = () => (
        <Form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
            <h4 className="fw-light mb-4 pb-2 border-bottom border-white border-opacity-10" style={{ letterSpacing: '4px', textTransform: 'uppercase' }}>
                {t('checkout.delivery_title')} <span className="text-gold">{t('checkout.delivery_gold')}</span>
            </h4>

            <Form.Group className="mb-4">
                <label className="text-gold small mb-3 d-block" style={{ letterSpacing: '4px', fontWeight: '400' }}>{t('checkout.district_label')}</label>
                <div className="custom-dropdown-container position-relative" ref={dropdownRef}>
                    <div
                        className="premium-input w-100 d-flex justify-content-between align-items-center cursor-pointer"
                        style={{ padding: '1.2rem 1.5rem', cursor: 'pointer' }}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span style={{ letterSpacing: '2px' }}>{address.district || t('checkout.select_district')}</span>
                        <FaArrowRight size={10} style={{ transform: isDropdownOpen ? 'rotate(270deg)' : 'rotate(90deg)', transition: 'transform 0.3s ease', color: 'var(--kaf-gold)' }} />
                    </div>

                    {isDropdownOpen && (
                        <div className="position-absolute w-100 mt-1 overflow-auto animate__animated animate__fadeIn"
                            style={{
                                zIndex: 1000,
                                maxHeight: '250px',
                                borderRadius: '2px',
                                border: '1px solid rgba(231, 209, 146, 0.2)',
                                background: 'rgba(10, 10, 10, 0.98)',
                                backdropFilter: 'blur(30px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                            }}>
                            {districts.map(d => (
                                <div
                                    key={d}
                                    className="px-4 py-3 custom-option transition-all"
                                    style={{ cursor: 'pointer', letterSpacing: '2px', fontSize: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.05)', textAlign: isAr ? 'right' : 'left' }}
                                    onClick={() => {
                                        setAddress({ ...address, district: d });
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    {d}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="input-line"></div>
                </div>
            </Form.Group>

            <Form.Group className="mb-5">
                <label className="text-gold small mb-3 d-block" style={{ letterSpacing: '4px', fontWeight: '400' }}>{t('checkout.street_label')}</label>
                <div className="input-group-premium">
                    <input
                        type="text"
                        required
                        lang={i18n.language}
                        placeholder={t('checkout.street_placeholder')}
                        value={address.street}
                        onChange={(e) => setAddress({ ...address, street: e.target.value.toUpperCase() })}
                        className="premium-input w-100"
                    />
                    <div className="input-line"></div>
                </div>
            </Form.Group>

            <div className="d-flex gap-3">
                <Button variant="outline-light" onClick={prevStep} className="w-50 py-3 rounded-0 border-opacity-25" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>
                    <FaArrowLeft size={10} className={isAr ? 'ms-2' : 'me-2'} style={{ transform: isAr ? 'rotate(180deg)' : 'none' }} /> {t('checkout.cta_back')}
                </Button>
                <Button className="btn-premium w-50" type="submit">
                    {t('checkout.cta_place')}
                </Button>
            </div>
        </Form>
    );

    const renderStep3 = () => (
        <div className="text-center py-4 animate__animated animate__zoomIn">
            <div className="mb-4 text-gold opacity-80">
                <FaCheckCircle size={80} />
            </div>
            <h2 className="fw-light mb-3" style={{ letterSpacing: '10px', textTransform: 'uppercase' }}>
                {t('checkout.success_title')} <span className="text-gold">{t('checkout.success_gold')}</span>
            </h2>
            <p className="fw-light mb-5 px-4" style={{ color: '#999', lineHeight: '1.8', letterSpacing: '1px' }}>
                {t('checkout.success_p')}<br />
                {t('checkout.success_arrival')} <span className="text-white">{address.district}</span>: 30-45 mins.
            </p>
            <Button as={Link} to="/" className="btn-premium">
                {t('checkout.success_cta')}
            </Button>
        </div>
    );

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="bg-ebony text-white" style={{ paddingTop: '160px', minHeight: '100vh' }}>
                <Container className="text-center">
                    <h2 className="display-4 fw-light mb-5" style={{ letterSpacing: '15px' }}>{t('cart.empty')}</h2>
                    <Button as={Link} to="/menu" className="btn-premium">{t('menu.title')} {t('menu.title_gold')}</Button>
                </Container>
            </div>
        )
    }

    return (
        <div className="bg-ebony text-white" style={{ paddingTop: '160px', minHeight: '100vh' }}>
            <Container className="pb-5">
                <Row className="justify-content-center">
                    <Col md={10} lg={6}>
                        {/* Custom Minimalist Progress Indicator */}
                        <div className="mb-5 px-4">
                            <div className="d-flex justify-content-between mb-2">
                                <span className={`small fw-light ${step >= 1 ? 'text-gold' : 'opacity-20'}`} style={{ letterSpacing: '2px' }}>{t('checkout.step1')}</span>
                                <span className={`small fw-light ${step >= 2 ? 'text-gold' : 'opacity-20'}`} style={{ letterSpacing: '2px' }}>{t('checkout.step2')}</span>
                                <span className={`small fw-light ${step >= 3 ? 'text-gold' : 'opacity-20'}`} style={{ letterSpacing: '2px' }}>{t('checkout.step3')}</span>
                            </div>
                            <div className="progress-minimal" style={{ height: '1px', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                                <div
                                    className="progress-line"
                                    style={{
                                        height: '100%',
                                        background: 'var(--kaf-gold)',
                                        width: `${((step - 1) / 2) * 100}%`,
                                        transition: 'width 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
                                        left: isAr ? 'auto' : 0,
                                        right: isAr ? 0 : 'auto'
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="luxury-card p-4 p-md-5">
                            {step === 1 && renderStep1()}
                            {step === 2 && renderStep2()}
                            {step === 3 && renderStep3()}
                        </div>

                        {step < 3 && (
                            <div className="mt-5 text-center opacity-30 small" style={{ letterSpacing: '3px' }}>
                                <FaMapMarkerAlt className="me-2" /> DISTRICT 5 • NEW CAIRO
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;
