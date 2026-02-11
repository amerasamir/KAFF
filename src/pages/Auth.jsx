import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Auth = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="bg-ebony text-white" style={{ paddingTop: '160px', minHeight: '100vh', paddingBottom: '100px' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={5}>
                        <div className="text-center mb-5 animate__animated animate__fadeIn">
                            <h6 className="text-gold mb-3" style={{ letterSpacing: '8px', fontWeight: '300' }}>
                                {isLogin ? t('auth.welcome') : t('auth.join_club')}
                            </h6>
                            <h2 className="display-4 fw-light" style={{ letterSpacing: '15px', textTransform: 'uppercase' }}>
                                {isLogin ? (
                                    <>
                                        {t('auth.signin_title')} <span className="text-gold">{t('auth.signin_gold')}</span>
                                    </>
                                ) : (
                                    <>
                                        {t('auth.join_title')} <span className="text-gold">{t('auth.join_gold')}</span>
                                    </>
                                )}
                            </h2>
                            <div className="mx-auto mt-4" style={{ width: '40px', height: '1px', background: 'var(--kaf-gold)', opacity: '0.5' }}></div>
                        </div>

                        <div className="liquid-glass p-4 p-md-5 animate__animated animate__zoomIn">
                            <Form className="auth-form-premium">
                                {!isLogin && (
                                    <Form.Group className="mb-4">
                                        <label className="text-gold small mb-3 d-block" style={{ letterSpacing: '4px' }}>{t('auth.form_name')}</label>
                                        <div className="input-group-premium">
                                            <input
                                                type="text"
                                                required
                                                placeholder={t('auth.form_name_placeholder')}
                                                className="premium-input w-100"
                                            />
                                            <div className="input-line"></div>
                                        </div>
                                    </Form.Group>
                                )}

                                <Form.Group className="mb-4">
                                    <label className="text-gold small mb-3 d-block" style={{ letterSpacing: '4px' }}>{t('auth.form_email')}</label>
                                    <div className="input-group-premium">
                                        <input
                                            type="email"
                                            required
                                            placeholder="EXAMPLE@KAF.COM"
                                            className="premium-input w-100"
                                        />
                                        <div className="input-line"></div>
                                    </div>
                                </Form.Group>

                                {!isLogin && (
                                    <Form.Group className="mb-4">
                                        <label className="text-gold small mb-3 d-block" style={{ letterSpacing: '4px' }}>{t('auth.form_phone')}</label>
                                        <div className="input-group-premium">
                                            <input
                                                type="tel"
                                                required
                                                placeholder="01XXXXXXXXX"
                                                className="premium-input w-100"
                                            />
                                            <div className="input-line"></div>
                                        </div>
                                    </Form.Group>
                                )}

                                <Form.Group className="mb-5">
                                    <label className="text-gold small mb-3 d-block" style={{ letterSpacing: '4px' }}>{t('auth.form_pass')}</label>
                                    <div className="input-group-premium">
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            className="premium-input w-100"
                                        />
                                        <div className="input-line"></div>
                                    </div>
                                </Form.Group>

                                <Button className="btn-premium w-100 py-3 mb-4" type="submit">
                                    {isLogin ? t('auth.btn_signin') : t('auth.btn_register')}
                                </Button>

                                <div className="text-center">
                                    <p className="small opacity-50 mb-0" style={{ letterSpacing: '2px' }}>
                                        {isLogin ? t('auth.footer_new') : t('auth.footer_member')}
                                        <Button
                                            variant="link"
                                            className="text-gold p-0 ms-2 text-decoration-none fw-bold"
                                            style={{ fontSize: '0.75rem', letterSpacing: '2px' }}
                                            onClick={() => setIsLogin(!isLogin)}
                                        >
                                            {isLogin ? t('auth.footer_link_reg') : t('auth.footer_link_login')}
                                        </Button>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Auth;
