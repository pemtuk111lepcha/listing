import React, { useState } from "react";
import "../styles/HomeStay.css"; // Reuse card styles
import Footer from "./footer";

import activity1img1 from '../img/activites/boom/b1.jpg';
import activity1img2 from '../img/activites/boom/b2.jpg';
import activity1img3 from '../img/activites/boom/b3.jpg';
import activity1img4 from '../img/activites/boom/b4.jpg';
import activity1img5 from '../img/activites/boom/b5.jpeg';
import activity1img6 from '../img/activites/Orange/o1.png';
import activity1img7 from '../img/activites/Orange/o2.png';
import activity1img8 from '../img/activites/Orange/o3.png'; 
import activity1img9 from '../img/activites/Orange/o4.png';
import activity1img10 from '../img/activites/Orange/o5.png';
import activity1img11 from '../img/activites/Local/l1.jpg';
import activity1img12 from '../img/activites/Local/l2.jpg';
import activity1img13 from '../img/activites/Local/l3.jpg'; 
import activity1img14 from '../img/activites/Local/l4.jpg';
import activity1img15 from '../img/activites/Local/l5.JPG';

// Add local images for fishing, kiwi, and resum
import Fishing1 from '../img/activites/Fishing/f1.jpeg';
import Fishing2 from '../img/activites/Fishing/f2.jpeg';
import Fishing3 from '../img/activites/Fishing/f3.jpeg';
import Fishing4 from '../img/activites/Fishing/f4.jpeg';
import Fishing5 from '../img/activites/Fishing/f5.jpg';

import Kiwi1 from '../img/activites/Kiwi/k1.jpeg';
import Kiwi2 from '../img/activites/Kiwi/k2.jpeg';
import Kiwi3 from '../img/activites/Kiwi/k3.jpeg';
import Kiwi4 from '../img/activites/Kiwi/k4.jpeg';
import Kiwi5 from '../img/activites/Kiwi/k5.jpeg';

import Resum1 from '../img/activites/Resum/r1.jpg';
import Resum2 from '../img/activites/Resum/r2.jpeg';
import Resum3 from '../img/activites/Resum/r3.jpeg';
import Resum4 from '../img/activites/Resum/r4.jpeg';
import Resum5 from '../img/activites/Resum/r5.jpg';

import Mushroom1 from '../img/activites/Mushroom/m2.jpeg';

function ImageModal({ open, images, current, onClose, onPrev, onNext }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ background: 'transparent', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-slider">
          <button className="slider-arrow left" onClick={e => { e.stopPropagation(); onPrev(); }}>&lt;</button>
          <img src={images[current]} alt="Activity Full" className="modal-image" />
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

const activities = [
  {
    title: "Boom Pool Water Garden",
    images: [
      activity1img1,
      activity1img2,
      activity1img3,
      activity1img4,
      activity1img5,
      
      // ...other imported images...
    ],
    imageSrc: activity1img1,
    imageAlt: "Boom Pool Water Garden",
    description: "Enjoy the refreshing waters and scenic beauty at Boom Pool Water Garden. This unique spot offers a tranquil environment surrounded by lush greenery, making it perfect for family picnics, relaxation, and nature walks. The garden features natural pools, vibrant flora, and plenty of space for children to play. Whether you want to take a dip, enjoy a quiet afternoon, or simply soak in the peaceful atmosphere, Boom Pool Water Garden is a must-visit destination for all ages.",
    link: "#"
  },
  {
    title: "Orange Picking Activities (Karthok Tadong)",
    images: [
      activity1img6,
      activity1img7, 
      activity1img8,
      activity1img9,    
      activity1img10,
    ],
    imageSrc: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Orange Picking Activities (Karthok Tadong)",
    description: "Experience orange picking in the beautiful orchards of Karthok Tadong. Wander through rows of fruit-laden trees, learn about the cultivation process from local farmers, and enjoy the sweet, juicy taste of freshly picked oranges. This activity is perfect for families and groups looking to connect with nature and understand the region's agricultural heritage. The scenic backdrop and hands-on experience make it a memorable outing for visitors of all ages.",
    link: "#"
  },
  {
    title: "Local Market Haat (Rinchenpong)",
    images: [
      activity1img11,
      activity1img12,
      activity1img13,
      activity1img14,
      activity1img15
    ],
    imageSrc: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Local Market Haat (Rinchenpong)",
    description: "Visit the vibrant local market haat in Rinchenpong for a taste of local life. The market is a bustling hub where villagers gather to sell fresh produce, handmade crafts, traditional snacks, and more. It's an excellent place to interact with locals, discover unique Sikkimese products, and immerse yourself in the region's culture. Don't miss the opportunity to sample local delicacies and take home souvenirs that capture the spirit of Rinchenpong.",
    link: "#"
  },
  {
    title: "Local Fishing Activities (Karthok)",
    images: [
      Fishing1,
      Fishing2,
      Fishing3,
      Fishing4,
      Fishing5
    ],
    imageSrc: Fishing1,
    imageAlt: "Local Fishing Activities (Karthok)",
    description: "Try your hand at fishing in the serene waters of Karthok. Guided by local experts, you'll learn traditional fishing techniques and enjoy the peaceful surroundings of the region's rivers and ponds. This activity is ideal for those seeking relaxation and a closer connection to nature. Whether you're a seasoned angler or a first-timer, the experience promises fun, learning, and the chance to catch your own meal.",
    link: "#"
  },
  {
    title: "Kiwi Cultivation (MVR)",
    images: [
      Kiwi1,
      Kiwi2,
      Kiwi3,
      Kiwi4,
      Kiwi5
    ],
    imageSrc: Kiwi1,
    imageAlt: "Kiwi Cultivation (MVR)",
    description: "Learn about kiwi cultivation at MVR and explore the orchards. Discover how this exotic fruit is grown in the unique climate of the region, from planting to harvest. Guided tours offer insights into sustainable farming practices and the challenges faced by local growers. Visitors can sample fresh kiwis, participate in picking (seasonal), and enjoy the scenic beauty of the orchards nestled amidst rolling hills.",
    link: "#"
  },
  {
    title: "Mushroom Farming (Karthok)",
    images: [
      Mushroom1
    ],
    imageSrc: Mushroom1, // Use the imported image here
    imageAlt: "Mushroom Farming (Karthok)",
    description: "Explore mushroom farming activities in Karthok and learn the process from start to finish. Visit local farms to see how mushrooms are cultivated, harvested, and prepared for market. The tour includes hands-on demonstrations, tips on growing your own mushrooms at home, and tastings of delicious mushroom-based dishes. This educational experience is perfect for food enthusiasts and anyone interested in sustainable agriculture.",
    link: "#"
  },
  {
    title: "Reesum Hike (Bird Watching, Nature Walk, Mountain View, Reesum Monastary)",
    images: [
      Resum1,
      Resum2,
      Resum3,
      Resum4,
      Resum5
    ],
    imageSrc: Resum1,
    imageAlt: "Reesum Hike (Bird Watching, Nature Walk, Mountain View, Reesum Monastary)",
    description: "Go for a hike at Reesum, enjoy bird watching, nature walks, mountain views, and visit Reesum Monastary. The trail winds through lush forests and offers panoramic vistas of the Himalayas. Along the way, spot a variety of bird species, discover native flora, and experience the tranquility of the mountains. The hike culminates at the historic Reesum Monastary, where you can learn about local Buddhist traditions and soak in the spiritual atmosphere.",
    link: "#"
  }
];

const Card = ({ images = [], imageSrc, imageAlt, title, description, link, onImageClick }) => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
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
        {/* Removed Learn more button */}
      </div>
    </div>
  );
};

export default function Activities() {
  const [modal, setModal] = useState({ open: false, images: [], current: 0 });

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
      <section className="heading1" id="heading-activities">
        <h2>Things <span>to Do</span></h2>
      </section>
      <section className="card-section">
        {activities.map((activity, idx) => (
          <Card key={idx} {...activity} onImageClick={openModal} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

