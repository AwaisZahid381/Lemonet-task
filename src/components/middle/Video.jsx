import React from "react";
import "./video.css";
const Video = () => {
  return (
    <>
      <div className="viddiv">
        <div className="viddivmini">
          <h1 className="heading">About LEMONET</h1>
          <p className="bigheader">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            recusandae <br /> cupiditate amet ex inventore enim hic. Reiciendis
            esse dolorem repellat iure error facilis suscipit quod fuga ut vitae
            nisi labore, corrupti neque iusto quibusdam accusamus sint quos
            pariatur ullam fugiat recusandae voluptates optio.
          </p>
          <video width="640" height="480" controls className="video">
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Video;
