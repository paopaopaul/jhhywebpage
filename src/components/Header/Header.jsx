import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = ({
  onResidenciesClick,
  onValueClick,
  onContactClick,
  onGetStartedClick,
}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings inner-Width h-container">
        <img src="./LOGO1.png" alt="logo" width={65} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <button className="button1" onClick={onResidenciesClick}>
              Cases
            </button>
            <button className="button1" onClick={onValueClick}>
              Information
            </button>
            <button className="button1" onClick={onContactClick}>
              Learn More
            </button>
            <button className="button1" onClick={onGetStartedClick}>
              Contact
            </button>
            <button className="button">
              <a href="mailto:lingzishengppl15@gmail.com">Products</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
