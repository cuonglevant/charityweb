import React, { useState } from "react";

import "./Donation.css";
function Donation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="header">
        <nav>
          <img src="./assets/Logo.png" alt="Logo" className="nav--img" />
          <div className="dropdown">
            <button className="dropbtn" onClick={handleClick}>
              Menu
            </button>
            {menu && (
              <div className="dropdown-content">
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Way to Fundraise</a>
                <a href="#">News</a>
              </div>
            )}
          </div>
          <div className="nav--searchbar">
            <input
              type="search"
              placeholder="Find your friend or search the news"
            ></input>
          </div>
          <div className="nav--btn1">
            <button type="submit">Fundraise</button>
          </div>
          <div className="nav--btn2">
            <button type="submit">Donate</button>
          </div>
        </nav>
      </div>
      <div className="form">
        <form>
          <h1>Your Donation</h1>
          <h3 className="icon">$</h3>
          <input className="money-input" type="text"></input>
          <button className="btn-custom">Custom Amount</button>
          <br />
          <div className="money">
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option1"
              autocomplete="off"
            />
            <label class="btn" for="option1">
              $10.00
            </label>

            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option2"
              autocomplete="off"
            />
            <label class="btn" for="option2">
              $25.00
            </label>
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option3"
              autocomplete="off"
            />
            <label class="btn" for="option3">
              $50.00
            </label>

            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option4"
              autocomplete="off"
            />
            <label class="btn" for="option4">
              $100.00
            </label>
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option5"
              autocomplete="off"
            />
            <label class="btn" for="option5">
              $250.00
            </label>
          </div>
          <h1>Select Payment Method</h1>
          <div class="input-group">
            <div class="form-check" id="onl-donate">
              <input
                type="radio"
                class="form-check-input"
                id="radio1"
                name="optradio"
                value="Onl"
                checked
              />
              Online Donation
              <label class="form-check-label" for="radio1"></label>
            </div>
            <div class="form-check" id="off-donate">
              <input
                type="radio"
                class="form-check-input"
                id="radio2"
                name="optradio"
                value="Off"
              />
              Offline Donation
              <label class="form-check-label" for="radio2"></label>
            </div>
          </div>
          <h1>Personal Infor</h1>
          <div className="name">
            <div className="text-firstName">
              <input
                className="FirstName"
                type="text"
                placeholder="First Name"
              ></input>
            </div>
            <div className="text-lastName">
              <input
                className="LastName"
                type="text"
                placeholder="Last Name"
              ></input>
            </div>
          </div>
          <div className="email">
            <input
              className="email"
              type="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="comment-section">
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              name="text"
              placeholder="Leave a comment"
            ></textarea>
          </div>
          <div class="form-check">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
            Agree to term?
          </div>
          <div className="label-total">
            <div className="text-wrapper">Donation Total:</div>
          </div>
          <div className="amount">$10.00</div>
          <br />
          <div className="btn-donate">
            <button class="btn" type="submit" id="btn-donate">
              Donate now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Donation;
