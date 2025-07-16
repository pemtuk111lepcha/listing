import React, { useState } from 'react';
import '../styles/Herosection.css';
import { Home, Building2, Hotel, MapPin, Activity, Car, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('Homestay');

    const tabs = [
        { name: 'Homestay', icon: <Home size={24} />, route: '/homestay' },
        { name: 'Resorts', icon: <Building2 size={24} />, route: '/resorts' },
        { name: 'Hotels', icon: <Hotel size={24} />, route: '/hotels' },
        { name: 'Places of Interest', icon: <MapPin size={24} />, route: '/places-of-interest' },
        { name: 'Activities', icon: <Activity size={24} />, route: '/activities' },
        { name: 'Cab', icon: <Car size={24} />, route: '/comingsoon' },
        { name: 'TourGuide', icon: <User size={24} />, route: '/tourguide' },
    ];

    return (
        <section className="hero-section">
            <div className="search-form-container" style={{ margin: '0 auto', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderRadius: '1.2rem', background: '#fff', maxWidth: '1100px', width: '90%', position: 'relative', top: '11rem', zIndex: 2 }}>
                <div className="tabs-nav">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.route}
                            className={`tab-link${activeTab === tab.name ? ' active' : ''}`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            <span className="tab-icon">{tab.icon}</span>
                            <span>{tab.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;



