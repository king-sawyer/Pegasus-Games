import React from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  let today = new Date();
  let todayVal = today.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="footer">
      <div className="logo">
        <img
          src="/images/Pegasus-games-logo-white-outline.png"
          alt="company-logo"
        />
      </div>
      <div className="hours">
        <u>
          {" "}
          <h3>Hours</h3>
        </u>
        <ul className="hours-ul">
          {days.map((day, i) => {
            if (todayVal === i && todayVal !== 0) {
              return (
                <li key={i} className="hours-li">
                  <u>
                    {" "}
                    <b>{day}: 11AM-5:30PM</b>
                  </u>
                </li>
              );
            } else if (todayVal === 0 && i === 0) {
              return (
                <li key={i} className="hours-li">
                  <u>
                    <b>{day}: CLOSED</b>
                  </u>
                </li>
              );
            } else if (i === 0) {
              return <li key={i}>{day}: CLOSED</li>;
            } else {
              return (
                <li key={i} className="hours-li">
                  {day}: 11AM-5:30PM
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="general-info">
        <div className="styling">
          <u>
            <h3>Contact</h3>
          </u>
          <ul className="contact-ul">
            <li className="contact-li">
              <AiFillPhone />
              {"   "}(541) 738-8266
            </li>
            <li className="contact-li">
              {" "}
              <FaHome />
              {"   "}1100 SW 3rd St, Corvallis, OR 97333
            </li>
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
    </div>
  );
}

export default Footer;
