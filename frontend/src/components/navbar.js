// src/components/Header.jsx
import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import HeroSection from './HeroSection';
import logo from '../img/logo/logo.png';

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    React.useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header>
                <Link to="../img/logo/logo.png" className="logo">
                    <img src={logo} alt="My Destiny Logo" className="logo-image" />
                </Link>
                {/* Hamburger menu icon for mobile only */}
                <button
                    className="navbar-toggle"
                    aria-label="Toggle navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect y="6" width="32" height="4" rx="2" fill="#2d323c"/>
                        <rect y="14" width="32" height="4" rx="2" fill="#2d323c"/>
                        <rect y="22" width="32" height="4" rx="2" fill="#2d323c"/>
                    </svg>
                </button>
                <nav className={`navbar${menuOpen ? ' open' : ''}`}>
                    <div className="desktop-nav-links">
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
                    </div>
                    {/* Overlay for background dim */}
                    {menuOpen && (
                        <>
                            <div
                                className="mobile-nav-overlay"
                                onClick={() => setMenuOpen(false)}
                                style={{}} />
                            <div className="mobile-nav-dropdown">
                                {/* Close button */}
                                <button
                                    className="mobile-nav-close"
                                    aria-label="Close menu"
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                        fontSize: 28,
                                        cursor: 'pointer',
                                        zIndex: 2100,
                                        color: '#222'
                                    }}
                                >
                                    {/* X icon SVG */}
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                        <line x1="18" y1="6" x2="6" y2="18" stroke="#2d323c" strokeWidth="2" strokeLinecap="round"/>
                                        <line x1="6" y1="6" x2="18" y2="18" stroke="#2d323c" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </button>
                                <Link to="/about" onClick={() => setMenuOpen(false)} className="mobile-link">About</Link>
                                <Link to="/footer" onClick={() => setMenuOpen(false)} className="mobile-link">Contact Us</Link>
                                {/* Removed Destinations, Collections, Popular Destinations */}
                            </div>
                        </>
                    )}
                </nav>
            </header>
            {location.pathname !== "/about" && location.pathname !== "/tour-guide" && (
                <>
                    <HeroSection />
                    <div className="hero-text-cover">
                        <h1 className="hero-main-title">Kaluk Rinchenpong Tourism</h1>
                        <h2 className="hero-sub-title">Explore your Destiny!</h2>
                        <p style={{ fontSize: '1.1rem', color: '#ccc', marginTop: '1rem' }}>
                            "These Hotels, Resorts and Homestays are run by private business owners."
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;