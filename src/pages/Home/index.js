import React from "react";
import "./Home.css";

import Logo from "../../assets/img/Logo.png";

function Home() {
  return (
    <div className="header d-flex justify-content-between align-items-center">
      <nav className="navbar-container d-flex justify-content-between align-items-center">
        <div className="logo_container d-flex">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="navbar d-flex flex-column justify-conten-between align-items-center">
          <div className="search-login d-flex justify-conten-between align-items-center">
            <div className="searchbar">
              <div className="search-form">
                <form className="d-flex justify-content-end" role="search">
                  <input
                    className="search-input d-flex text-center"
                    type="search"
                    placeholder="Find your friend or search the news"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
            <div className="login">
              <i className="fa-user"></i>
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
          <div className="page-links d-flex justify-conten-between align-items-center">
            <div className="link-home">
              <a href="#">Home</a>
            </div>
            <div className="link-contact">
              <a href="#">About us</a>
            </div>
            <div className="ways-to-rise">
              <a href="#">Ways to Rise</a>
            </div>
            <div className="volunteer">
              <a href="#">Volunteer</a>
            </div>
            <button className="btn btn-primary">Fundraise</button>
            <button className="btn btn-primary">Donate</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
