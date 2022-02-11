import React, { Component } from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
// import avatar from "../../assets/Images/Mohan-muruge.jpg";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <input type="text" placeholder="Search"></input>
          <img src={search} alt="search logo" />
          {/* <img src={avatar} /> */}
        </div>
        <button type="button">Upload</button>
      </div>
    );
  }
}

export default Navbar;
