import React from 'react';
import '../styles/footer.css'; // Make sure this import is correct

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="container">
        <div className="footerContent">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: mausam.subba@msu.edu.in</li>
            <li>Phone: +91 7076736294</li>
            <li>Address: Megyong, 737111 , West Sikkim, Sikkim</li>
          </ul>
        </div>
        <div className="footerContent">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#speciality">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews-section">Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footerContent">
          <h3>Follow Us</h3>
          <ul className="socialIcons">
            <li>
              <a href="https://www.instagram.com/__maasakh_musuk/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-label="Instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/mausams/Introduction-to-Python2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-label="GitHub"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" aria-label="Facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" aria-label="Twitter"></i>
              </a>
            </li>
            <li>
              <a href="mailto:mausam.subba@msu.edu.in" target="_blank" rel="noopener noreferrer">
                <i className="far fa-envelope" aria-label="Gmail"></i>
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
