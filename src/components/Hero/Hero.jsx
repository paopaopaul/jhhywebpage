import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Section */}
        <div className="hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br></br> Most Reliable <br /> Container Houses
              <br />
              {/* 取网页大小 */}
              {false && <div>im paul</div>}
              <br />
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="">
              Leading container houses manufacturer
              <br />
            </span>
            <span className="">
              Container housing supplier for 2022 Beijing Winter Olympics
            </span>
            <span className="">
              Four modern manufacturing bases of over 100,000 square meters
            </span>
            <br />
            <br />
          </div>
          <br />
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={2750} end={3000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Cases</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={20} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Years of Experience</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={35} />
                <span>+</span>
              </span>
              <span className="secondaryText">Patents</span>
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: spring,
            }}
            className="image-container"
          >
            <img src="./hero2.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
