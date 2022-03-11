import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="main-header__container">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <input type="text" placeholder="Search"></input>
          <img src={search} alt="search logo" />
          <img src={avatar} />
        </div>
        <button type="button">Upload</button>
      </div>
    </header>
  );
};

export default Header;
