import React from 'react'

const Footer = () => {
  return (
      <footer>
      <div className="footer-container">
        {/* Restaurant Info */}
        <div className="footer-info">
          <div className="footer-logo">
          {/* <h3>Tatu Restaurant</h3> */}
            <img src="/images/Tatu_logo_orange.svg" alt="Little Lemon Logo" />
          </div>
          <div className="footer-info-links">
          <p>3 Sling Drive, Victoria Island, Lagos, Nigeria.</p>
          <p>
            Phone:{" "}
            <a href="tel:+23411223344" className="footer-link">
              +23411223344
            </a>{" "}
            |{" "}
            <a href="tel:+23411002200" className="footer-link">
              +23411002200
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:contactus@taturestaurant.org" className="footer-link">
              customersupport@taturestaurant.org
            </a>
          </p>
          </div>
      </div>

        {/* Opening Hours */}
        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="footer-socials-icons">
          <a href="https://facebook.com/taturestaurant" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/taturestaurant" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/taturestaurant" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tatu Restaurant. All Rights Reserved.</p>
        </div>
      </div>

     
      
      </footer>
  )
}

export default Footer
