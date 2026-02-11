import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    return (
        <footer className="footer bg-ebony text-white pb-4" style={{ borderTop: '1px solid rgba(231, 209, 146, 0.15)' }}>
            <Container>
                {/* Main Content Area - With Gold Accent Top */}
                <div className="pt-5 pb-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">

                        {/* Logo Section */}
                        <div className="brand-side">
                            <Link to="/" className="modern-logo" style={{ fontSize: '1.8rem', letterSpacing: '5px', textDecoration: 'none' }}>
                                KAF
                            </Link>
                        </div>

                        {/* Contact Info Section */}
                        <div className="contact-side">
                            <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4 text-center">
                                <div className="d-flex align-items-center gap-2 small opacity-50">
                                    <FaMapMarkerAlt className="text-gold" />
                                    <span>New Cairo, Egypt</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 small opacity-50" dir="ltr">
                                    <FaPhoneAlt size={12} className="text-gold" />
                                    <span>+20 123 456 7890</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="social-side">
                            <div className="d-flex gap-4">
                                <a href="#" className="social-icon-link fs-5 transition-all"><FaInstagram /></a>
                                <a href="#" className="social-icon-link fs-5 transition-all"><FaXTwitter /></a>
                                <a href="#" className="social-icon-link fs-5 transition-all"><FaFacebookF /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section - Removed border to keep only the top gold line */}
                <div className="pt-5 pb-2 text-center small opacity-10" style={{ letterSpacing: '2px' }}>
                    © {new Date().getFullYear()} All rights reserved
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
