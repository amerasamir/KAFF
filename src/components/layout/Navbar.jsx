import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Badge, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingBag, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navigation = ({ cartCount }) => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Navbar scrolled state
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // ScrollSpy logic
            const sections = ['home', 'menu', 'about', 'contact'];
            const offsets = sections.map(id => {
                const element = document.getElementById(id === 'menu' ? 'menu' : id);
                // Note: menu section id is 'menu' in Menu.jsx
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return { id, top: rect.top + window.scrollY - 100 }; // 100px buffer
                }
                return { id, top: 0 };
            });

            const scrollPosition = window.scrollY;
            let current = 'home';

            for (let i = offsets.length - 1; i >= 0; i--) {
                if (scrollPosition >= offsets[i].top) {
                    current = offsets[i].id;
                    break;
                }
            }

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on mount to set initial state
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            // If not on home page, navigate to home with hash
            window.location.href = `/#${sectionId}`;
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -80; // Navbar height offset
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            // Update hash without scrolling again (since we handled it smoothly)
            window.history.pushState(null, null, `#${sectionId}`);
        }
        handleClose();
    };

    // Handle initial scroll if coming from another page with hash
    useEffect(() => {
        if (location.hash && location.pathname === '/') {
            const sectionId = location.hash.substring(1);
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const yOffset = -80;
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <Navbar expand="lg" variant="dark" fixed="top" className={`navbar-transparent py-4 ${scrolled ? 'scrolled' : ''}`}>
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="modern-logo text-white"
                    onClick={(e) => scrollToSection(e, 'home')}
                >
                    KAF
                </Navbar.Brand>

                <div className="d-flex align-items-center order-lg-3 gap-3">
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="btn-glass px-2 py-1 small fw-light d-flex align-items-center justify-content-center"
                        style={{ minWidth: '40px', fontSize: '0.7rem', letterSpacing: '1px' }}
                    >
                        {i18n.language === 'en' ? 'AR' : 'EN'}
                    </button>

                    <Link to="/auth" className="text-white fs-5 icon-link d-none d-lg-block">
                        <FaUser />
                    </Link>
                    <Link to="/cart" className="text-white fs-5 position-relative icon-link">
                        <FaShoppingBag />
                        {cartCount > 0 && (
                            <Badge bg="gold" text="dark" pill className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.6rem' }}>
                                {cartCount}
                            </Badge>
                        )}
                    </Link>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} className="border-0 ms-2" />
                </div>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={show}
                    onHide={handleClose}
                    className="bg-charcoal text-white"
                    style={{ backgroundColor: 'var(--kaf-charcoal)' }}
                >
                    <Offcanvas.Header closeButton closeVariant="white">
                        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            <Nav.Link href="#home" onClick={(e) => scrollToSection(e, 'home')} className={location.pathname === '/' && activeSection === 'home' ? 'active text-gold' : ''}>
                                {t('nav.home')}
                            </Nav.Link>
                            <Nav.Link href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className={location.pathname === '/' && activeSection === 'menu' ? 'active text-gold' : ''}>
                                {t('nav.menu')}
                            </Nav.Link>
                            <Nav.Link href="#about" onClick={(e) => scrollToSection(e, 'about')} className={location.pathname === '/' && activeSection === 'about' ? 'active text-gold' : ''}>
                                {t('nav.story')}
                            </Nav.Link>
                            <Nav.Link href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={location.pathname === '/' && activeSection === 'contact' ? 'active text-gold' : ''}>
                                {t('nav.contact')}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/auth" onClick={handleClose} className="d-lg-none">
                                {t('nav.signin')}
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Navigation;
