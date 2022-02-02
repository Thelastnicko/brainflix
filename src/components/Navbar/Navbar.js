import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <input type="text" placeholder="Search"></input>
        <img src={search} />
        {/* <img src={avatar} /> */}
      </div>
      <button type="button">Upload</button>
    </div>
  );
};

export default Navbar;
