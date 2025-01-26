import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleIconClick = (type) => {
    switch (type) {
      case "whatsapp":
        window.open("https://wa.me/+919803494034", "_blank");
        break;
      case "facebook":
        window.open("https://www.facebook.com/share/1BhiY4qdVM/?mibextid=wwXIfr", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com/bakersstop01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
        break;
      case "call":
        window.open("tel:+919803494034", "_self");
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">CONTACT NOW!</h1>
        <div className="contact-icons">
          <FaWhatsapp
            className="icon whatsapp"
            onClick={() => handleIconClick("whatsapp")}
          />
          <FaFacebook
            className="icon facebook"
            onClick={() => handleIconClick("facebook")}
          />
          <FaInstagram
            className="icon instagram"
            onClick={() => handleIconClick("instagram")}
          />
          <FaPhone
            className="icon phone"
            onClick={() => handleIconClick("call")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
