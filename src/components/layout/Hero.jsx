import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-bg.jpg';

import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <div id="home" className="hero-section position-relative d-flex align-items-center justify-content-center text-center"
            style={{
                minHeight: '100vh',
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBg}) center/cover no-repeat`,
                paddingTop: '80px'
            }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={12} className="mx-2">
                        <h1 className="hero-title mb-4 animate__animated animate__fadeInDown animate__faster_custom">
                            {t('hero.title')}
                        </h1>
                        <p className="lead text-gray mb-5 animate__animated animate__fadeInUp animate__fast_custom" style={{ maxWidth: '800px', margin: '0 auto', color: '#fff', letterSpacing: '4px', lineHeight: '1.2', fontWeight: '200', textTransform: 'uppercase', fontSize: '1.1rem', opacity: '0.8' }}>
                            {t('hero.subtitle')}
                        </p>
                        <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 justify-content-center animate__animated animate__fadeInUp animate__fast_custom mt-4">
                            <Button as={Link} to="/menu" className="btn-premium hero-btn-responsive">
                                {t('hero.cta_menu')}
                            </Button>
                            <Button as={Link} to="/about" className="btn-glass hero-btn-responsive">
                                {t('hero.cta_story')}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
