import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Account.css";

import Logo from "../../assets/img/Logo.png";
import Avt from "../../assets/img/avt.jpg";
import Login from "../../assets/img/Login-btn.png";
import Intro from "../../assets/img/intro-img.png";
import Donated from "../../assets/img/Donated-icon.png";
import Sponsored from "../../assets/img/Sponsored-icon.png";
import Raised from "../../assets/img/Raised-icon.png";


function Account() {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    
  
    <div className="account">
      <div className="header">
        <nav className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="menu-bar">
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
      <div className="body">
        <div className="contianer">
          <div className="overlap">
            <div className="personal-info">
              <div className="FA-qs">
                <div className="question">
                  <p className="text-wrapper">
                    Airbnb only releases contact information for Hosts and
                    guests after a reservation is confirmed.
                  </p>
                  <p className="div">What info is shared with others?</p>
                  <img className="svg" alt="Svg" src={Raised} />
                </div>
                <div className="div-2" />
                <div className="question-2">
                  <p className="p">
                    Details for users uses to verify your identity can’t be
                    changed. Contact info and some personal details can be
                    edited, but we may ask you verify your identity the next
                    time you donate.
                  </p>
                  <p className="text-wrapper-2">Which details can be edited?</p>
                  <img className="svg" alt="Svg" src={Sponsored} />
                </div>
                <div className="div-3" />
                <div className="question-3">
                  <p className="text-wrapper-3">
                    We’re hiding some account details to protect your identity.
                  </p>
                  <p className="text-wrapper-4">
                    Why isn’t my info shown here?
                  </p>
                  <img className="svg" alt="Svg" src={Logo} />
                </div>
              </div>
              <div className="settings">
                <div className="container">
                  <div className="div-4">
                    <div className="text-wrapper-5">Address</div>
                    <input
                      type="text"
                       className="email"
                       placeholder="Enter your address"
                     />
                    {/* <div className="text-wrapper-7">Edit</div> */}
                  </div>
                </div>
                <div className="social-media-account-wrapper">
                  <div className="div-4">
                    <div className="text-wrapper-8">Social media account</div>
                    <input
                      type="text"
                       className="email"
                       placeholder="Enter your link"
                     />
                    <div className="text-wrapper-7" onClick={handleReset}>Add</div>
                  </div>
                </div>
                <div className="phone-numbers-wrapper">
                  <div className="phone-numbers">
                    <div className="text-wrapper-9">Phone numbers</div>
                    <input
                      type="text"
                       className="email"
                       placeholder="Enter your phone number"
                     />
                    {/* <div className="text-wrapper-11">Add</div> */}
                  </div>
                </div>
                <div className="email-address-wrapper">
                  <div className="div-4">
                    <div className="text-wrapper-12">Email address</div>
                    <input
                      type="text"
                       className="email"
                       placeholder="Enter your email"
                     />
                    {/* <div className="text-wrapper-7">Edit</div> */}
                  </div>
                </div>
                <div className="legal-name-wrapper">
                 <div className="div-4">
                  <div className="text-wrapper-13">Legal name</div>
                   <input
                    type="text"
                    className="name"
                    placeholder="Enter your name"
                    />
                   {/* <div className="text-wrapper-7">Edit</div> */}
                  </div>
                 </div>
              </div>
            </div>
            <div className="account-navigation">
              <div className="ol">
                <div className="overlap-group">
                  <div className="text-wrapper-14">Account</div>
                  <div className="li">
                    <img className="img" alt="Svg" src={Logo} />
                    
                  </div>
                </div>
              </div>
              <div className="text-wrapper-16">Personal info</div>
            </div>
          </div>
        </div>
        <div className="group">
          <img className="image" alt="lgo" src={Avt} />
          <div className="text-wrapper-17">choose profile picture
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default Account;
