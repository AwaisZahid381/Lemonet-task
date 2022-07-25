import React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <>
    <div className="main">
      <div className="twodiv">
        <div className="one">
          <img
            className="img"
            src="https://static.vecteezy.com/system/resources/previews/002/398/513/original/blank-book-cover-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="two">
          <div className="head">
            <h1>Read Our Documnets</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              voluptates ullam sit!
            </p>
          </div>
          <div className="inside">
            <div className="inside1">
            
              <select className="trans">
                <option value="actual value 4">Display Text 1</option>
                <option value="actual value 5">Display Text 2</option>
                <option value="actual value 6">Display Text 3</option>
              </select>
              <select className="trans">
                <option value="actual value 4">Display Text 1</option>
                <option value="actual value 5">Display Text 2</option>
                <option value="actual value 6">Display Text 3</option>
              </select>
            </div>
            <div className="inside2">
              <button className="trans">hello world</button>
              <button className="trans">world world</button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    
    </>
    
  );
};

export default Timeline;
