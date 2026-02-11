import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import interiorImg from '../assets/luxury_cafe_interior.png';
import baristaImg from '../assets/modern_barista_art.png';

import { useTranslation } from 'react-i18next';

const About = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    return (
        <section id="about" className="about-section bg-ebony text-white py-5 position-relative">
            <Container className="py-5">
                {/* Intro Title - Centered */}
                <div className="text-center mb-5 pb-5 animate__animated animate__fadeIn">
                    <h2 className="display-3 fw-light" style={{ letterSpacing: isAr ? '0' : '15px', textTransform: 'uppercase' }}>
                        {t('about.title')} <span className="text-gold">{t('about.title_gold')}</span>
                    </h2>
                </div>

                {/* Section 1: Philosophy & Interior */}
                <Row className="gy-5 align-items-center mb-5 pb-lg-5">
                    <Col lg={6}>
                        <div className={`pe-lg-5 animate__animated ${isAr ? 'animate__fadeInRight' : 'animate__fadeInLeft'}`}>
                            <h3 className="h4 text-gold mb-4 fw-light" style={{ letterSpacing: isAr ? '0' : '4px' }}>{t('about.philosophy_title')}</h3>
                            <p className="lead fw-light mb-4" style={{ letterSpacing: isAr ? '0' : '1.5px', lineHeight: '2', opacity: '0.9' }}>
                                {t('about.p1')}
                            </p>
                            <p className="fw-light mb-4" style={{ letterSpacing: isAr ? '0' : '1px', lineHeight: '1.8', opacity: '0.6' }}>
                                {t('about.p2')}
                            </p>
                            <p className="fw-light mb-0" style={{ letterSpacing: isAr ? '0' : '1px', lineHeight: '1.8', opacity: '0.6' }}>
                                {t('about.p3')}
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`animate__animated ${isAr ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
                            <img
                                src={interiorImg}
                                alt="KAF Interior"
                                className="img-fluid rounded-1 shadow-lg"
                                style={{ filter: 'grayscale(20%) contrast(110%)', border: '1px solid rgba(255,255,255,0.05)' }}
                            />
                        </div>
                    </Col>
                </Row>

                {/* Section 2: Craftsmanship & Barista */}
                <Row className="gy-5 align-items-center mt-5 pt-lg-5 flex-lg-row-reverse">
                    <Col lg={6}>
                        <div className={`ps-lg-5 animate__animated ${isAr ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
                            <h3 className="h4 text-gold mb-4 fw-light" style={{ letterSpacing: isAr ? '0' : '4px' }}>{t('about.craft_title')}</h3>
                            <p className="lead fw-light mb-4" style={{ color: '#eee', lineHeight: '1.6', letterSpacing: isAr ? '0' : '1px' }}>
                                {t('about.craft_subtitle')}
                            </p>
                            <p className="fw-light mb-0" style={{ color: '#999', lineHeight: '1.8', fontSize: '1.1rem', letterSpacing: isAr ? '0' : '0.5px' }}>
                                {t('about.craft_p')}
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`animate__animated ${isAr ? 'animate__fadeInRight' : 'animate__fadeInLeft'}`}>
                            <img
                                src={baristaImg}
                                alt="Master Barista"
                                className="img-fluid rounded-1 shadow-lg"
                                style={{ filter: 'grayscale(10%) contrast(110%)', border: '1px solid rgba(255,255,255,0.05)' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
