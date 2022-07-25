import React from "react";
import "./Navbar.css";
import { BiCubeAlt } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="leftside">
            <h2 className="logo"><BiCubeAlt className="cubeIcon"/>LEMONET</h2>
            <div className="navul">

            <a>About</a>
            <a>Why</a>
            <a>Benefits</a>
            <a>Token Safe</a>
            <a>Roadmap</a>
            <a>FAQ's</a>
            <a>Contact</a>
            </div>
        </div>
        <div className="rightside">
          <select className="select">
            <option className="option" value="actual value 1">English</option>
            <option className="option" value="actual value 2">Urdu</option>
            <option className="option" value="actual value 3">Arabic</option>
          </select>
          <button className="btns fade">Connect Wallet</button>
          <button className="btns fds">PRE SALE</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
