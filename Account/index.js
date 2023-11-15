import React, {useState} from "react";

import "./Account.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Logo from "../../assets/img/Logo.png";

function Account() {
  return (
    // <div className="header">
    //     <nav>
    //       <img src="./assets/Logo.png" alt="Logo" />
    //       <div className="d-flex p-5">
    //         <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    //           <DropdownToggle caret>Menu</DropdownToggle>
    //           <DropdownMenu>
    //             <DropdownItem>Home</DropdownItem>
    //             <DropdownItem>About us</DropdownItem>
    //             <DropdownItem>ways to function</DropdownItem>
    //             <DropdownItem>News</DropdownItem>
    //           </DropdownMenu>
    //         </Dropdown>
    //       </div>
    //       <div className="nav--searchbar">
    //       <input type="search" placeholder="Find your friend or search the news"></input>
    //       </div>
    //       <div className="box">
    //   <div className="group">
    //     <img className="img" alt="Avatar" src="./assets/Logo.png" />
    //     <div className="text-wrapper">Welcome, userr1</div>
    //   </div>
      
    // </div>

    <div className="account">
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
                  <img className="svg" alt="Svg" src="/img/svg.svg" />
                </div>
                <div className="div-2" />
                <div className="question-2">
                  <p className="p">
                    Details Airbnb uses to verify your identity can’t be
                    changed. Contact info and some personal details can be
                    edited, but we may ask you verify your identity the next
                    time you book or create a listing.
                  </p>
                  <p className="text-wrapper-2">Which details can be edited?</p>
                  <img className="svg" alt="Svg" src="/img/svg-1.svg" />
                </div>
                <div className="div-3" />
                <div className="question-3">
                  <p className="text-wrapper-3">
                    We’re hiding some account details to protect your identity.
                  </p>
                  <p className="text-wrapper-4">
                    Why isn’t my info shown here?
                  </p>
                  <img className="svg" alt="Svg" src="/img/svg-3.svg" />
                </div>
              </div>
              <div className="settings">
                <div className="container">
                  <div className="div-4">
                    <div className="text-wrapper-5">Address</div>
                    <div className="text-wrapper-6">Not provided</div>
                    <div className="text-wrapper-7">Edit</div>
                  </div>
                </div>
                <div className="social-media-account-wrapper">
                  <div className="div-4">
                    <div className="text-wrapper-8">Social media account</div>
                    <div className="text-wrapper-6">Not provided</div>
                    <div className="text-wrapper-7">Add</div>
                  </div>
                </div>
                <div className="phone-numbers-wrapper">
                  <div className="phone-numbers">
                    <div className="text-wrapper-9">Phone numbers</div>
                    <p className="text-wrapper-10">
                      Add a number so confirmed guests and we can get in touch.
                    </p>
                    <div className="text-wrapper-11">Add</div>
                  </div>
                </div>
                <div className="email-address-wrapper">
                  <div className="div-4">
                    <div className="text-wrapper-12">Email address</div>
                    <div className="email">nothingthere@dgmail.com</div>
                    <div className="text-wrapper-7">Edit</div>
                  </div>
                </div>
                <div className="legal-name-wrapper">
                  <div className="div-4">
                    <div className="text-wrapper-13">Legal name</div>
                    <div className="name">Peter Griffin</div>
                    <div className="text-wrapper-7">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-navigation">
              <div className="ol">
                <div className="overlap-group">
                  <div className="text-wrapper-14">Account</div>
                  <div className="li">
                    <img className="img" alt="Svg" src="/img/svg-2.svg" />
                    <div className="text-wrapper-15">Personal info</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-16">Personal info</div>
            </div>
          </div>
        </div>
        <div className="group">
          <img className="image" alt="Image" src="/img/image-2.png" />
          <div className="text-wrapper-17">choose profile picture</div>
        </div>
      </div>
    </div>
  );
}
export default Account;
