import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Logo from "../../assets/img/Logo.png";
import Login from "../../assets/img/Login-btn.png";
import Intro from "../../assets/img/intro-img.png";
import Donated from "../../assets/img/Donated-icon.png";
import Sponsored from "../../assets/img/Sponsored-icon.png";
import Raised from "../../assets/img/Raised-icon.png";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <nav className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="logo"  />
          </div>
          <div className="menu-bar">
            <div className="search-login">
              <div className="search-bar">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input 
                  className="search-input"
                  type="search"
                  placeholder="Find your friend or search the news"
                  aria-label="Search" />
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
                <div className="volunteer">
                  <a href="/">Volunteer</a>
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
      <div className="body">
        <div className="intro">
          <div className="intro-img">
            <img src={Intro} alt="Illustration" />
          </div>
          <div className="intro-text">
            <div className="intro-text-title">Your gift can make a <b>real impact</b></div>
            <div className="intro-discription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et 
            </div>
            <div className="read-more">
              <a href="/">
                <div className="readmore-text">Read more</div>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="fund-target"><div>Fundraise target: $1,500,000</div></div>
        <div className="fund-info">
          <div className="donated">
            <div className="donated-icon">
              <img src={Donated} alt="donated"/>
            </div>
            <div className="donated-info">
              <div className="people-donated">People donated</div>
              <div className="donated-num">14,670</div>
            </div>
          </div>
          <div className="sponsored">
            <div className="sponsored-icon">
              <img src={Sponsored} alt="sponsored"/>
            </div>
            <div className="sponsored-info">
              <div className="kid-sponsored">Kids get sponsored</div>
              <div className="sponsored-num">35,608</div>
            </div>
          </div>
          <div className="raised">
          <div className="raised-icon">
              <img src={Raised} alt="raised"/>
            </div>
            <div className="raised-info">
              <div className="money-raised">Money raised so far</div>
              <div className="raised-num">$245,150</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
