import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common.js";
import { forwardRef } from "react";

const Residencies = forwardRef((_props, ref) => {
  return (
    <section className="r-wrapper" ref={ref}>
      <div className="paddigns innerWidth r-container">
        <div className="flexColStart r-head">
          <br />
          <br />
          <span className="orangeText">Best Choices</span>
          <span className="primaryText ">Popular Cases</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price"></span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

const SliderButtons = () => {
  const swiper = useSwiper();

  const goToFirstSlide = () => {
    swiper.slideTo(0);
  };

  const goToLastSlide = () => {
    swiper.slideTo(swiper.slides.length - 1);
  };

  return (
    <div className="flexCenter r-buttons">
      <button
        onClick={() =>
          swiper.isBeginning ? goToLastSlide() : swiper.slidePrev()
        }
      >
        &lt;
      </button>
      <button
        onClick={() => (swiper.isEnd ? goToFirstSlide() : swiper.slideNext())}
      >
        &gt;
      </button>
    </div>
  );
};

export default Residencies;
