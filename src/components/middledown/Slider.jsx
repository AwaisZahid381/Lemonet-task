import React from "react";
import "./slider.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
const Slider = () => {
  return (
    <div className="slider">
              <svg
          id="blob1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            fill="rgba(155, 215, 55, 0.1)"
            d="M35,-57.9C46,-47.3,56.1,-38.8,65.6,-27.2C75.2,-15.7,84.2,-1.1,79.6,9.5C75,20.1,56.7,26.7,43.8,33.4C30.9,40.1,23.3,46.8,13.5,53C3.6,59.2,-8.5,64.8,-20.9,64.3C-33.2,63.8,-45.8,57.2,-51.5,46.8C-57.2,36.4,-56,22.1,-55.4,9.5C-54.7,-3.1,-54.8,-14,-51.8,-24.9C-48.8,-35.7,-42.8,-46.5,-33.6,-58C-24.5,-69.4,-12.2,-81.7,-0.1,-81.5C12,-81.3,23.9,-68.6,35,-57.9Z"
            transform="translate(100 100)"
          />
        </svg>
      <div className="inslider">
        <h2 className="header">LEMON NETWORK</h2>
        <h5 className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde
          itaque <br /> doloribus velit vero numquam, nostrum aliquid
          perspiciatis, quod recusandae illum.
        </h5>
        <div className="sliderorg">
          <div className="sol">
            <div className="solin">
              <h2 className="inhead">SOLUTION</h2>
              <h5 className="headref">Decentralized Social Network</h5>
              <ul>
                <li>Lorem ipsum dolor sit amet .</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, eius deleniti?
                </li>
              </ul>
            </div>
          </div>
          <div className="que">
            <div className="quein">
              <h2 className="inhead">PROBLEM</h2>
              <h5 className="headref">Conventional Social Network</h5>
              <ul>
                <li className="list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  necessitatibus accusamus voluptatem.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, eius deleniti?
                </li>
              </ul>
            </div>
            <div className="arrows">
            <BsArrowLeft className="arr"/>
            <BsArrowRight className="arr"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
