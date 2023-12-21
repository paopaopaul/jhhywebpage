import React from "react";
import "./Contact.css";
import { FaTiktok } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { forwardRef } from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact = forwardRef((_props, ref) => {
  return (
    <section className="c-wrapper" ref={ref}>
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Learn More</span>
          <span className="primaryText">Find Out More About Us</span>
          <span className="secondaryText">
            We are always ready to fulfill your interests
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              {/* First Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <AiFillYoutube size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Youtube</span>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@bjhyhouse/videos"
                  className="flexCenter button"
                >
                  Video Link
                </a>
              </div>

              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaFacebook size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Facebook</span>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=61550125418276"
                  className="flexCenter button"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              {/* Third Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaTiktok size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Tiktok</span>
                  </div>
                </div>
                <a
                  href="https://www.tiktok.com/@mzljifittnr?_t=8iMkkziNwDu&_r=1"
                  className="flexCenter button"
                >
                  Watch Now
                </a>
              </div>

              {/* Forth Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaLinkedin size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">LinkedIn</span>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/company/bjhyhouse/"
                  className="flexCenter button"
                >
                  Connect Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./heropic2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
