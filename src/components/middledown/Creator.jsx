import React from "react";
import "./creator.css";
import { MdVolumeUp } from "react-icons/md";    
import { MdPeopleOutline } from "react-icons/md";    
import { MdSearch } from "react-icons/md";    
import { MdOutlineDeveloperBoard } from "react-icons/md";    
import { BiCubeAlt } from "react-icons/bi";

const Creator = () => {
  return (
    <>
      <div className="divs">
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
        <svg
          id="blob2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(155, 215, 55, 0.1)"
            d="M37.7,-60.2C50.7,-50.3,64.3,-43,71.8,-31.4C79.3,-19.8,80.7,-4,77.4,10.3C74.1,24.7,66.1,37.5,55.1,44.6C44.1,51.7,30,53,17.2,55.3C4.3,57.7,-7.3,61,-21.7,62.1C-36.1,63.2,-53.3,62.2,-62.5,53.2C-71.7,44.3,-72.8,27.5,-70.1,13.1C-67.4,-1.2,-60.8,-13,-55,-24.9C-49.2,-36.8,-44.2,-48.9,-35.1,-60.6C-26.1,-72.4,-13,-83.8,-0.4,-83.3C12.3,-82.7,24.7,-70.2,37.7,-60.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="box1 boxes">
          <div className="header">
            <h2>Creator - To - Consumer</h2>
            <h2>Decentralize Platform</h2>
          </div>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptas eius ipsa nobis, architecto dolores cupiditate{" "}
          </h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            commodi fugiat eveniet, quas modi cupiditate nesciunt magnam saepe
            doloribus mollitia iure sapiente beatae qui quam? Praesentium
            pariatur vitae dolores voluptatem facilis corporis cumque officia!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            officia magni dolores repellendus voluptates mollitia laborum, enim
            debitis. Pariatur, esse! Quae, temporibus tenetur quasi vero porro
            sit neque.
          </p>
        </div>
        <div className="box2 boxes">
          <div className="logos">
            <div className="bx">
                <MdVolumeUp className="samelogo"/>
                <div className="innerflex"><p>Advertisers </p><span className="circle"></span></div>
            </div>
            <div className="bx">
                <MdPeopleOutline className="samelogo"/>
                <div className="innerflex"><p>Consumer </p><span className="circle"></span></div>
            </div>
          </div>
          <div className="logos">
            <div className="mainlogo">
                <BiCubeAlt className="difflogo"/>
            </div>
          </div>
          <div className="logos">
            <div className="bx">
                <MdSearch className="samelogo"/>
                <div className="innerflex"><p>Researchers </p><span className="circle"></span></div>

            </div>
            <div className="bx">
                <MdOutlineDeveloperBoard className="samelogo"/>
                <div className="innerflex"><p>Developer </p><span className="circle"></span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creator;
