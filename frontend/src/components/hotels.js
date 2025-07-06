import React from 'react';
import '../styles/HomeStay.css'; // Ensure you have the correct CSS file for styling
import Footer from './footer'; // Import Footer
import mount1 from '../img/HOTELS/MOUNT_VIEW/1 (1).jpeg';
import mount2 from '../img/HOTELS/MOUNT_VIEW/1 (2).jpeg';
import mount3 from '../img/HOTELS/MOUNT_VIEW/1 (4).jpeg';
import mount4 from '../img/HOTELS/MOUNT_VIEW/1 (3).jpeg';
import mount5 from '../img/HOTELS/MOUNT_VIEW/1 (5).jpeg';
import ghonday1 from '../img/HOTELS/pine/1 (1).jpeg';
import ghonday2 from '../img/HOTELS/pine/1 (2).jpeg';
import ghonday3 from '../img/HOTELS/pine/1 (4).jpeg';
import ghonday4 from '../img/HOTELS/pine/1 (6).jpeg';
import ghonday5 from '../img/HOTELS/pine/1 (7).jpeg';
import shiva1 from '../img/HOTELS/SHIVA/1 (1).jpeg';
import shiva2 from '../img/HOTELS/SHIVA/1 (2).jpeg';
import shiva3 from '../img/HOTELS/SHIVA/1 (3).jpeg';
import shiva4 from '../img/HOTELS/SHIVA/1 (3).jpeg';
import shiva5 from '../img/HOTELS/SHIVA/1 (5).jpeg';

// Image Modal component
function ImageModal({ open, images, current, onClose, onPrev, onNext }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ background: 'transparent', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-slider">
          <button className="slider-arrow left" onClick={e => { e.stopPropagation(); onPrev(); }}>&lt;</button>
          <img src={images[current]} alt="Hotel Full" className="modal-image" />
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
        <h2>Hot<span>els  </span></h2>
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
            images={listing.images}
            contact={listing.contact}
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
    imageSrc: mount1,
    imageAlt: 'Hotel Mount View',
    title: 'Hotel Mount View',
    description: 'Hotel Mount View offers breathtaking panoramic views of the Kanchenjunga range. Its a haven for nature lovers and adventure seekers, known for its serene environment, ancient monasteries, and proximity to various natural and historical sites.',
    link: '#',
    images: [mount1, mount2, mount3, mount4, mount5],
    contact: '+91-9800554562/ 8927694061'
  },
  {
    imageSrc: ghonday1,
    imageAlt: 'Pine Village Retreat',
    title: 'Pine Village Retreat',
    description: 'Pine Village Retreat (Kaluk, West Sikkim) is a highly-rated, budget-friendly retreat offering a serene escape. Guests enjoy comfortable, spacious rooms, often with stunning Kanchenjunga views, warm hospitality, and amenities like a restaurant and garden, making it perfect for a peaceful mountain getaway.',
    link: 'http://pinevillageretreat.co.in',
    images: [ghonday1, ghonday2, ghonday3, ghonday4, ghonday5],
    contact: '+91-9064461907'
  },
  {
    imageSrc: shiva1,
    imageAlt: 'Hotel Shiva Ratna',
    title: 'Hotel Shiva Ratna',
    description: 'Hotel Shiva Ratna offers a serene and unpretentious stay, reflecting the regions peaceful charm. This local establishment provides comfortable accommodations, aiming to deliver warm, personal hospitality and an authentic taste of Sikkimese tranquility. Its an ideal choice for travelers seeking a quiet retreat amidst natural beauty.',
    link: 'https://pinevillageretreat.co.in/',
    images: [shiva1, shiva2, shiva3, shiva4, shiva5],
    contact: '+91-9733092426'
  }
];

export default function Hotels() {
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
