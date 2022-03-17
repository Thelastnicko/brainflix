import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import Btn from "../Button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header__container">
      <div className="main-header">
        <Link className="main-logo__container" to="/">
          <img alt="brainflix logo" src={logo} />
        </Link>
        <div className="main-header__search-upload-container">
          <form className="main-header__search-input-container" action="#">
            <input
              className="search-field"
              type="text"
              placeholder="Search"
            ></input>
          </form>
          <div className="main-header__user-upload-container">
            <form className="main-header__upload-btn-container">
              <Link to="/Upload">
                <Btn
                  text="UPLOAD"
                  image={uploadIcon}
                  class="primary-btn upload-btn"
                />
              </Link>
            </form>
            <div className="user-image"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
