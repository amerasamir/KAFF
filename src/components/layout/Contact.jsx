import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    return (
        <section id="contact" className="contact-section bg-ebony text-white py-5 position-relative" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container className="py-5 position-relative z-1">
                <div className="text-center mb-5 animate__animated animate__fadeIn">
                    <h6 className="text-gold mb-3" style={{ letterSpacing: '8px', fontWeight: '300' }}>{t('contact.tagline')}</h6>
                    <h2 className="display-4 fw-light mb-4" style={{ letterSpacing: '12px', textTransform: 'uppercase' }}>
                        {t('contact.title')} <span className="text-gold">{t('contact.title_gold')}</span>
                    </h2>
                    <div className="mx-auto" style={{ width: '60px', height: '1px', background: 'var(--kaf-gold)' }}></div>
                </div>

                <Row className="gy-4">
                    {/* Left: Contact Form in a Glass Panel */}
                    <Col lg={6}>
                        <div className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-center" style={{ backdropFilter: 'blur(30px)', border: '1px solid rgba(255,255,255,0.05)', minHeight: '400px' }}>
                            <div className="mb-4" style={{ textAlign: isAr ? 'right' : 'left' }}>
                                <p className="small text-gold fw-light" style={{ letterSpacing: '2px', opacity: '0.8' }}>{t('contact.p_sub')}</p>
                            </div>

                            <Form className="footer-form-premium">
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <div className="input-group-premium">
                                            <input type="text" placeholder={t('contact.form_name')} className="premium-input w-100" />
                                            <div className="input-line"></div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="input-group-premium">
                                            <input type="email" placeholder={t('contact.form_email')} className="premium-input w-100" />
                                            <div className="input-line"></div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="input-group-premium mb-4">
                                    <textarea placeholder={t('contact.form_msg')} rows="2" className="premium-input w-100"></textarea>
                                    <div className="input-line"></div>
                                </div>
                                <Button className="btn-premium px-5 py-3 w-100" style={{ letterSpacing: '4px', fontSize: '0.75rem' }}>
                                    {t('contact.form_btn')}
                                </Button>
                            </Form>
                        </div>
                    </Col>

                    {/* Right: Map Section (Equal Sized) */}
                    <Col lg={6}>
                        <div className="map-wrapper h-100 rounded-1 overflow-hidden" style={{ minHeight: '400px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.28187865445!2d31.396860341796875!3d30.0169123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd33e8f8101%3A0xe542da6595ee437a!2sNew%20Cairo%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
