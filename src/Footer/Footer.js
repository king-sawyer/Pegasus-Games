import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img
          src="/images/Pegasus-games-logo-white-outline.png"
          alt="company-logo"
        />
      </div>
      <div className="hours">
        <h3>Hours</h3>
        <ul className="hours-ul">
          <li className="hours-li">Monday: 11AM-5:30PM</li>
          <li className="hours-li">Tuesday: 11AM-5:30PM</li>
          <li className="hours-li">Wednesday: 11AM-5:30PM</li>
          <li className="hours-li">Thursday: 11AM-5:30PM</li>
          <li className="hours-li">Friday: 11AM-5:30PM</li>
          <li className="hours-li">Saturday: 11AM-5:30PM</li>
          <li className="hours-li">Sunday: Closed</li>
        </ul>
      </div>
      <div className="general-info">
        <h3>Contact</h3>
        <ul className="contact-ul">
          <li className="contact-li">(541) 738-8266</li>
          <li className="contact-li">1100 SW 3rd St, Corvallis, OR 97333</li>
          {/* <li className="contact-li">(541) 738-8266</li> */}
          <li className="contact-li">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.1409562549475!2d-123.26750708425548!3d44.55321910178325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c040eb4f39e8fd%3A0xe16a57c99f48183b!2sPegasus%20Games!5e0!3m2!1sen!2sus!4v1606770530397!5m2!1sen!2sus"
              width="300"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
