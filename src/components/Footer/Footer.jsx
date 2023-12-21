import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrappe">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./LOGO1.png" alt="" width={120} />
          <span className="secondaryText">
            Our mission is to make better and safer <br />
            container houses to everyone
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
          <br/>
          No. 445, Mafang Logistics Base East, Pinggu BeiJing China
          <br/><br/>
          CopyRight 2023 All Right Reserved Beijing Jinhuahengyuan
          <br/>
          Prefab Housing Co.,Ltd  Sitemap
          </span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
