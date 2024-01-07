import React from "react";
import "./Volunteer.css";
import Logo from "../../assets/img/Logo.png";
import Login from "../../assets/img/Login-btn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img/volunteer-img1.png";

function Volunteer() {
  return (
    <div className="volunteer">
      <div className="header">
        <nav className="nav-bar d-flex">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="menu-bar d-flex flex-column">
            <div className="search-login">
              <div className="search-bar">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Find your friend or search the news"
                  aria-label="Search"
                />
              </div>
              <div className="login-btn">
                <img src={Login} alt="login" />
              </div>
            </div>
            <div className="page-donate">
              <div className="page-links">
                <div className="link-home">
                  <a href="/">Home</a>
                </div>
                <div className="link-contact">
                  <a href="/">About us</a>
                </div>
                <div className="ways-to-rise">
                  <a href="/">Ways to Fundraise</a>
                </div>
              </div>
              <div className="donate-btn">
                <div className="donate">DONATE</div>
                <div className="fundraise">FUNDRAISE</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="volunteer-body d-flex justify-content-between">
        <div className="volunteer-body-left d-flex flex-column">
          <div className="title-container">
            <h1 className="volunteer-title">Volunteer</h1>
          </div>
          <div className="subtitle-container">
            <h2 className="subtitle">Volunteer with us</h2>
          </div>
          <div className="text-container">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </div>
          <div className="donate-btn">
            <div className="volunteer-call">Call : +000 365 698</div>
          </div>
        </div>
        <div className="volunteer-body-right">
          <img src={img1} alt="volunteer" className="img-1" />
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
