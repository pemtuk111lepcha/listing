import React from 'react';
import '../styles/HomeStay.css'; // Ensure you have the correct CSS file for styling
import Footer from './footer'; // Import Footer
import presum1 from '../img/HOMESTAY/presum/presum.jpeg';
import presum2 from '../img/HOMESTAY/presum/presum2.jpeg';
import presum3 from '../img/HOMESTAY/presum/presum3.jpeg';
import presum4 from '../img/HOMESTAY/presum/presum4.jpeg';
import presum5 from '../img/HOMESTAY/presum/presum5.jpeg';

import nest1 from '../img/HOMESTAY/nest/nest1.jpg';
import nest2 from '../img/HOMESTAY/nest/nesr2.jpg';
import nest3 from '../img/HOMESTAY/nest/nest3.jpg';
import nest4 from '../img/HOMESTAY/nest/nest4.jpg';

import ranis1 from '../img/HOMESTAY/ranis/WhatsApp Image 2025-06-21 at 11.46.13 AM.jpeg'
import ranis2 from '../img/HOMESTAY/ranis/WhatsApp Image 2025-06-21 at 11.46.14 AM.jpeg'
import ranis3 from '../img/HOMESTAY/ranis/WhatsApp Image 2025-06-21 at 11.46.16 AM.jpeg'
import ranis4 from '../img/HOMESTAY/ranis/WhatsApp Image 2025-06-21 at 11.46.17 AM.jpeg'


import orange1 from '../img/HOMESTAY/orange vills/1 (1).jpeg'
import orange2 from '../img/HOMESTAY/orange vills/1 (2).jpeg'
import orange3 from '../img/HOMESTAY/orange vills/1 (3).jpeg'
import orange4 from '../img/HOMESTAY/orange vills/1 (4).jpeg'


import telaiza1 from '../img/HOMESTAY/telaiza/1 (1).jpeg'
import telaiza2 from '../img/HOMESTAY/telaiza/1 (10).jpeg'

import telaiza3 from '../img/HOMESTAY/telaiza/1 (9).jpeg'

import telaiza4 from '../img/HOMESTAY/telaiza/1 (5).jpeg'

import telaiza5 from '../img/HOMESTAY/telaiza/1 (3).jpeg'

import orchid1 from '../img/HOMESTAY/orchid/a (1).jpeg'
import orchid2 from '../img/HOMESTAY/orchid/a (10).jpeg'
import orchid3 from '../img/HOMESTAY/orchid/a (4).jpeg'
import orchid4 from '../img/HOMESTAY/orchid/a (5).jpeg'
import orchid5 from '../img/HOMESTAY/orchid/a (7).jpeg'

import tamu1 from '../img/HOMESTAY/tamu/1 (1).jpeg'
import tamu2 from '../img/HOMESTAY/tamu/1 (2).jpeg'
import tamu3 from '../img/HOMESTAY/tamu/1 (3).jpeg'
import tamu4 from '../img/HOMESTAY/tamu/1 (4).jpeg'
import tamu5 from '../img/HOMESTAY/tamu/1 (5).jpeg'


import mahi1 from '../img/HOMESTAY/mahima/1 (1).jpeg'

import mahi2 from '../img/HOMESTAY/mahima/1 (2).jpeg'

import mahi3 from '../img/HOMESTAY/mahima/1 (3).jpeg'

import mahi4 from '../img/HOMESTAY/mahima/1 (4).jpeg'

import mahi5 from '../img/HOMESTAY/mahima/1 (5).jpeg'


import talay1 from '../img/HOMESTAY/talay/1 (3).jpeg'
import talay2 from '../img/HOMESTAY/talay/1 (1).jpeg'
import talay3 from '../img/HOMESTAY/talay/1 (8).jpeg'
import talay4 from '../img/HOMESTAY/talay/1 (6).jpeg'
import talay5 from '../img/HOMESTAY/talay/1 (2).jpeg'

import tadong1 from '../img/HOMESTAY/tadong/1 (1).jpeg'
import tadong2 from '../img/HOMESTAY/tadong/1 (2).jpeg'
import tadong3 from '../img/HOMESTAY/tadong/1 (3).jpeg'
import tadong4 from '../img/HOMESTAY/tadong/1 (4).jpeg'
import tadong5 from '../img/HOMESTAY/tadong/1 (5).jpeg'


import acharya1 from '../img/HOMESTAY/ACHARYA/WhatsApp Image 2025-06-21 at 6.48.12 PM.jpeg'
import acharya2 from '../img/HOMESTAY/ACHARYA/WhatsApp Image 2025-06-21 at 6.48.14 PM.jpeg'
import acharya3 from '../img/HOMESTAY/ACHARYA/WhatsApp Image 2025-06-21 at 6.48.13 PM.jpeg'
import acharya4 from '../img/HOMESTAY/ACHARYA/WhatsApp Image 2025-06-21 at 6.48.15 PM.jpeg'
import acharya5 from '../img/HOMESTAY/ACHARYA/WhatsApp Image 2025-06-21 at 6.48.16 PM (1).jpeg'


// Image Modal component
function ImageModal({ open, images, current, onClose, onPrev, onNext }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ background: 'transparent', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-slider">
          <button className="slider-arrow left" onClick={e => { e.stopPropagation(); onPrev(); }}>&lt;</button>
          <img src={images[current]} alt="Homestay Full" className="modal-image" />
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
        {/* <h2>Home<span>stay</span></h2> */}
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
      <h2 className="heading">Why Kaluk <span>Rinchenpong Tourism</span></h2>
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
    imageSrc: '/image/MENDARIN/M (6).jpg',
    imageAlt: 'Presum Homestay',
    title: 'Presum Homestay',
    description: 'Nestled in diverse locales like Kaluk, West Sikkim Presum Homestay welcomes you to a world of comfort. Enjoy well-appointed rooms, modern amenities, and warm hospitality for a truly charming and memorable "home away from home" experience.',
    link: 'https://www.mandarinvillageresort.com/',
    contact: '+91-9733038009',
    images: [
      presum1,
      presum2,
      presum3,
      presum4,
      presum5
    ]
  },
  {
    imageSrc: '/image/ghonday/G (1).jpg',
    imageAlt: 'Rinchenpong Nest',
    title: 'Rinchenpong Nest',
    description: 'Rinchenpong Nest offers a tranquil escape in West Sikkim, boasting comfortable rooms and breathtaking views of the Kanchenjunga range. This charming retreat provides a peaceful base near monasteries and local attractions.',
    link: 'https://ghondayresort.com/',
    contact: '+91-7432021509',
    images: [
      nest1,
      nest2,
      nest3,
      nest4
    ]
  },
  {
    imageSrc: '/image/pine/pine-village-retreat.jpg',
    imageAlt: 'Ranis Kitchen Homestay',
    title: 'Ranis Kitchen Homestay',
    description: 'Ranis Kitchen Homestay (West Sikkim) offers a warm, homely retreat. Guests can enjoy local hospitality and potentially delicious home-cooked meals, providing an authentic West Sikkim experience.',
    link: 'https://pinevillageretreat.co.in/',
    contact: '+91-9733249736/ 9609866688',
  images: [
      ranis1,
      ranis2,
      ranis3,
      ranis4
    ]
  },
  {
    imageSrc: '/image/naturestay/th.jpeg',
    imageAlt: 'Orange Villa Homestay',
    title: 'Orange Villa Homestay',
    description: 'Orange Villa Homestay in West Sikkim offers a charming and comfortable retreat. Its a delightful spot for a peaceful stay, providing warm hospitality amidst serene, picturesque surroundings.',
    link: 'https://www.thenaturestay.com/',
    contact: '+91-9593244292',
    images: [
      orange1,
      orange2,
      orange3,
      orange4
    ]
  },
  {
    imageSrc: '/image/Hotel Rinchenpong Nest/rinchenpong-nest.jpg',
    imageAlt: 'Telaiza Residency Homestay',
    title: 'Telaiza Residency Homestay',
    description: 'Telaiza Residency Homestay Kaluk, Rinchenpong, West Sikkim offers a serene and comfortable stay amidst West Sikkims natural beauty. It promises warm hospitality, essential amenities, and a peaceful environment, perfect for a relaxing getaway.',
    link: 'https://www.booking.com/hotel/in/talay-ghar-homestay.en-gb.html',
    contact: '+91-8327380772',
  images: [
      telaiza1,
      telaiza2,
      telaiza3,
      telaiza4,
      telaiza5
      
    ]
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Orchid Villa Homestay',
    title: 'Orchid Villa Homestay',
    description: 'Orchid Villa Homestay offers a serene escape in Rinchenpong. Enjoy comfortable stays, home-cooked local cuisine, and stunning views of the Kanchenjunga range and surrounding nature.',
    link: 'https://www.example.com/orchid-villa-homestay',
    contact: '+91-8436105158',
 images: [
      orchid1,
      orchid2,
      orchid3,
      orchid4,
      orchid5
    ]
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Tamu Kyi Retreat',
    title: 'Tamu Kyi Retreat',
    description: 'Tamu Kyi Retreat offers a charming escape into tranquility. Experience authentic hospitality and cultural warmth, surrounded by the stunning beauty of the Himalayas. It’s a peaceful haven for those seeking a genuine and serene West Sikkim experience.',
    link: 'https://www.example.com/tamu-kyi-retreat',
    contact: '+91-9733270189',
 images: [
     tamu1,
     tamu2,
     tamu3,
     tamu4,
     tamu5
    ]
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Mahimalya Homestay',
    title: 'Mahimalya Homestay',
    description: 'Mahimalaya Homestay offers a cozy and inviting stay amidst the regions natural splendor. Guests can expect warm hospitality, comfortable accommodations, and a chance to experience the serene beauty of the Himalayas. Its a great spot for a peaceful and authentic West Sikkim retreat.',
    link: 'https://www.example.com/mahimalya-homestay',
    contact: '+91-9002055295',
   images: [
     mahi1,
     mahi2,
     mahi3,
     mahi4,
     mahi5
    ]
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Talay Ghar Homestay',
    title: 'Talay Ghar Homestay',
    description: 'Talay Ghar Homestay nestled in Kaluk, offers a peaceful retreat with stunning Kanchenjunga views. Guests enjoy comfortable rooms, warm hospitality, and a perfect blend of nature and local charm.',
    link: 'https://www.example.com/talay-ghar-homestay',
    contact: '+91-7002677593/ 8257891926',
  images: [
      talay1,
      talay2,
      talay3,
      talay4,
      talay5

    ]
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Tadong Home Stay',
    title: 'Tadong Home Stay',
    description: 'Tadong Home Stay offers a serene and authentic local experience in Sikkim. Guests enjoy comfortable stays, warm hospitality, and a peaceful environment surrounded by natural beauty.',
    link: 'https://www.example.com/tadong-home-stay',
    contact: '+91-8145619407',
  images: [
      tadong1,
      tadong2,
      tadong3,
      tadong4,
      tadong5
    ]
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Acharya Homestay Lower Rinchenpong',
    title: 'Acharya Homestay Lower Rinchenpong',
    description: 'Acharya Homestay (Lower Rinchenpong) offers a tranquil and authentic stay in West Sikkim. It provides comfortable accommodation and warm hospitality, allowing guests to experience the peaceful charm of the Lower Rinchenpong area amidst natural beauty.',
    link: 'Website-Acharyahomestay.Com ',
    contact: '+91-9733235413',
   images: [
      acharya1,
      acharya2,
      acharya3,
      acharya4,
      acharya5
    ]
  }
];

export default function HomeStay() {
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
      <section className="heading1" id="heading-kaluk">
        <h2>Home<span>stay</span></h2>
      </section>
      <ListingSection title="Kaluk" listings={kalukListings} viewMoreLink="./vfvf.html" onImageClick={openModal} />
      <WhyMyDestiny />
      <Footer /> {/* Add Footer here */}
    </div>
  );
}
