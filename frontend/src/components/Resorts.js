import React from 'react';
import '../styles/HomeStay.css'; // Ensure you have the correct CSS file for styling
import Footer from './footer'; // Import Footer
import mandarin1 from '../img/RESORT/MENDARIN/M (5).jpg';
import mandarin2 from '../img/RESORT/MENDARIN/M (4).jpg';
import mandarin3 from '../img/RESORT/MENDARIN/M (3).jpg';
import mandarin4 from '../img/RESORT/MENDARIN/M (2).jpg';
import mandarin5 from '../img/RESORT/MENDARIN/M (1).jpg';
import ghonday1 from '../img/RESORT/ghonday/1 (1).jpeg';
import ghonday2 from '../img/RESORT/ghonday/1 (10).jpeg';
import ghonday3 from '../img/RESORT/ghonday/1 (11).jpeg';
import ghonday4 from '../img/RESORT/ghonday/1 (6).jpeg';
import ghonday5 from '../img/RESORT/ghonday/1 (7).jpeg';

import reesum1 from '../img/RESORT/reesum/r1.jpg';
import reesum2 from '../img/RESORT/reesum/r2.jpg';
import reesum3 from '../img/RESORT/reesum/r3.jpeg';
import reesum4 from '../img/RESORT/reesum/r4.jpg';
import reesum5 from '../img/RESORT/reesum/r5.jpg';


// Image Modal component
function ImageModal({ open, images, current, onClose, onPrev, onNext }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ background: 'transparent', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-slider">
          <button className="slider-arrow left" onClick={e => { e.stopPropagation(); onPrev(); }}>&lt;</button>
          <img src={images[current]} alt="Resort Full" className="modal-image" />
          <button className="slider-arrow right" onClick={e => { e.stopPropagation(); onNext(); }}>&gt;</button>
        </div>
        <div className="modal-thumbnails">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumb"
              className={idx === current ? "active" : ""}
              onClick={() => onNext(idx)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Card component
const Card = ({ images = [], imageSrc, imageAlt, title, description, link, contact, onImageClick }) => {
  const [current, setCurrent] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  const imgList = images.length ? images : [imageSrc];

  React.useEffect(() => {
    if (!hovered || imgList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imgList.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [hovered, imgList.length]);

  return (
    <div className="card">
      <div
        className="card-image-slider"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onImageClick(imgList, current)}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        <img src={imgList[current]} alt={imageAlt} className="card-image" />
        {imgList.length > 1 && (
          <div className="slider-dots">
            {imgList.map((_, idx) => (
              <span key={idx} className={idx === current ? 'active' : ''}></span>
            ))}
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-contact" style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0', fontSize: '1rem', color: '#666' }}>
          <i className="fas fa-phone-alt" style={{ marginRight: '8px', color: '#238b45' }}></i>
          <span style={{ marginRight: '6px' }}>Contact:</span>
          <span>{contact}</span>
        </div>
        <a href={link} className="btn0">Explore more...</a>
      </div>
    </div>
  );
};

// ListingSection component
const ListingSection = ({ title, listings, viewMoreLink, onImageClick }) => {
  return (
    <>
      <section className="heading1" id={`heading-${title.toLowerCase().replace(/\s/g, '')}`}>
        <h2>Res<span>orts </span></h2>
      </section>
      <section className="card-section">
        {listings.map((listing, index) => (
          <Card
            key={index}
            imageSrc={listing.imageSrc}
            imageAlt={listing.imageAlt}
            title={listing.title}
            description={listing.description}
            link={listing.link}
            contact={listing.contact}
            images={listing.images}
            onImageClick={onImageClick}
          />
        ))}
        {viewMoreLink && (
          <div className="view-more-container">
            <a href={viewMoreLink} className="btn0 view-more-btn">
              View more <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        )}
      </section>
    </>
  );
};

// WhyMyDestiny component
const WhyMyDestiny = () => {
  const features = [
    {
      icon: 'fas fa-box-open',
      title: 'Wide Assortment of Stays',
      description: 'Find your perfect offbeat getaway with My Destiny! We offer a wide range of unique stays suiting every taste and budget.'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Hassle Free Booking',
      description: "Simply browse, select, and book your preferred stay. We'll take care of the rest!"
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Free Cancellation',
      description: "We understand that travel plans can be unpredictable, and we've got you covered! Enjoy free cancellation."
    },
    {
      icon: 'fas fa-phone-alt',
      title: '24x7 Guest Support',
      description: "From booking queries to on-trip support, we're always here to ensure a smooth and enjoyable journey!"
    }
  ];

  return (
    <section className="why-destiny-section">
      <h2 className="heading">Why Kaluk  <span>Rinchenpong Tourism</span></h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon-wrapper">
              <i className={feature.icon}></i>
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Listings data
const kalukListings = [
  {
    imageSrc: mandarin1,
    imageAlt: 'Mandarin Village Resort',
    title: 'Mandarin Village Resort',
    description: 'Mandarin Village Resort (Kaluk, West Sikkim) is a highly-rated retreat offering a tranquil escape amidst nature. Guests praise its comfortable rooms, excellent service, and breathtaking views of the Kanchenjunga range, making it ideal for a peaceful and luxurious mountain getaway.',
    link: 'https://www.mandarinvillageresort.com/',
    contact: '+91-99330 12605',
    images: [mandarin1, mandarin2, mandarin3, mandarin4, mandarin5]
  },
  {
    imageSrc: ghonday1,
    imageAlt: 'Ghonday Village Resort',
    title: 'Ghonday Village Resort',
    description: 'Ghonday Village Resort is located at the most beautiful countryside,Kaluk(Rinchenpong) which is hemmed in sublime Kanchendzonga range with historical heritage houses and monks hymn resonating monasteries .The resort offers you the best panoramic view of Mt Kanchendzonga range.',
    link: 'https://ghondayresort.com/',
    contact: '+91-9933001127/ 9593979695',
    images: [ghonday1, ghonday2, ghonday3, ghonday4, ghonday5]
  },
  {
    imageSrc: reesum1,
    imageAlt: 'Ressum Resort',
    title: 'Reesum Resort',
    description: 'Immerse yourself in the heart of authentic Sikkimese hospitality and embark on the journey that goes beyond accommodation - its an invitation to experience the rich culture and tranquility of rural sikkim.',
    link: 'https://www.reesumresort.com',
    contact: '+91 97335525509/ 9641614647',
    images: [reesum1, reesum2, reesum3, reesum4, reesum5]
  }
];

export default function Resorts() {
  const [modal, setModal] = React.useState({ open: false, images: [], current: 0 });
  const openModal = (images, current) => setModal({ open: true, images, current });
  const closeModal = () => setModal({ open: false, images: [], current: 0 });
  const prevImg = e => {
    e && e.stopPropagation();
    setModal(m => ({ ...m, current: (m.current - 1 + m.images.length) % m.images.length }));
  };
  const nextImg = (eOrIdx) => {
    if (typeof eOrIdx === 'number') {
      setModal(m => ({ ...m, current: eOrIdx }));
    } else {
      eOrIdx && eOrIdx.stopPropagation();
      setModal(m => ({ ...m, current: (m.current + 1) % m.images.length }));
    }
  };
  return (
    <div className="App">
      <ImageModal
        open={modal.open}
        images={modal.images}
        current={modal.current}
        onClose={closeModal}
        onPrev={prevImg}
        onNext={nextImg}
      />
      <ListingSection title="Kaluk" listings={kalukListings} viewMoreLink="./vfvf.html" onImageClick={openModal} />
      <WhyMyDestiny />
      <Footer />
    </div>
  );
}
