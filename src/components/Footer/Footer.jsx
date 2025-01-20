import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <section id="contact" className="contact">
  <div className="contact-content">
    <h2 className="section-title">Contact Us</h2>
    <div className="contact-info">
      <div className="contact-item">
        <h3>Phone</h3>
        <a href="tel:+5551234567" className="contact-link">
          <i className="fas fa-phone-alt"></i> 9803494034
        </a>
      </div>
      <div className="contact-item">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.instagram.com/bakersstop01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/share/1BhiY4qdVM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </div>
      <div className="contact-item">
        <h3>WhatsApp</h3>
        <a 
          href="https://wa.me/919803494034" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
        >
          <i className="fab fa-whatsapp"></i> Chat with Us
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Footer
