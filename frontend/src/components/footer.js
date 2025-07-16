import React from 'react';
import '../styles/footer.css'; // Make sure this import is correct

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="container">
        <div className="footerContent">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: kalukrinchenpongtourism@gmail.com</li>
            <li>Phone: +91 9876543210/ +91 9876543210</li>
            <li>Address: Rinchenpong, Kaluk, 737113 , West Sikkim, Sikkim</li>
          </ul>
        </div>
        <div className="footerContent">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">About</a></li>
            <li><a href="#speciality">Blog</a></li>
            <li><a href="#gallery">Hotels</a></li>
            <li><a href="#about">HomeStay</a></li>
            <li><a href="#reviews-section">Resorts</a></li>
            <li><a href="#contact">Cab</a></li>
            <li><a href="#contact">Activities</a></li>
            <li><a href="#contact">Place Of Interest</a></li>
            <li><a href="#contact">Tour Guides</a></li>
          </ul>
        </div>
        <div className="footerContent">
          <h3>Follow Us</h3>
          <ul className="socialIcons">
            <li>
              <a href="https://www.instagram.com/kaluk_rinchenpong_tourism/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-label="Instagram"></i>
              </a>
            </li>
            
            <li>
              <a href="https://www.facebook.com/profile.php?id=61578373289418" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" aria-label="Facebook"></i>
              </a>
            </li>
           
            <li>
              <a href="mailto: kalukrinchenpongtourism@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="far fa-envelope" aria-label="Gmail"></i>
              </a>
            </li>

             <li>
              <a href="https://wa.me/9735342063" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" aria-label="wtpp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="credit">
        Created by <span><a href="#">Mausam S</a></span> | All rights are reserved
      </h1>
    </section>
  );
};



export default Footer;
