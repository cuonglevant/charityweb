import React, { useState } from "react";

import "./Donation.css";
import Logo from "../../assets/img/Logo.png";
import Login from "../../assets/img/Login-btn.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Donation() {

  const handleOnChangeAmount = (event) => {
    this.setAmount({
      amount: event.target.value,
    });
  };

  const [amount, setAmount] = useState("$0.00");
  const [option1, setOption1] = useState("$10.00");
  const [option2, setOption2] = useState("$25.00");
  const [option3, setOption3] = useState("$50.00");
  const [option4, setOption4] = useState("$100.00");
  const [option5, setOption5] = useState("$250.00");
  const [readOnly, setReadOnly] = useState(true);

  const handleButtonClick = () => {
    setReadOnly(false);
  };

  const handleMoneyButtonClick = (event) => {
    const buttonId = event.target.id;

    let optionValue;
    switch (buttonId) {
      case "option1":
        optionValue = option1;
        break;
      case "option2":
        optionValue = option2;
        break;
      case "option3":
        optionValue = option3;
        break;
      case "option4":
        optionValue = option4;
        break;
      case "option5":
        optionValue = option5;
        break;
      default:
        optionValue = "";
        break;
    }

    setAmount(optionValue.toString());
    setReadOnly(false);
  };

  const handleDonateButton = () => {
    alert("Thanks for supporting us!");
  };

  return (
    <div>
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
      <div className="form">
        <form>
          <h1>Your Donation</h1>
          <h3 className="icon">$</h3>
          <input
            className="money-input"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            readOnly={readOnly}
          ></input>
          <button
            type="button"
            className="btn-custom"
            onClick={handleButtonClick}
          >
            Custom Amount
          </button>
          <br />
          <div className="money">
            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="option1"
              autoComplete="off"
              onClick={handleMoneyButtonClick}
            />
            <label className="btn" htmlFor="option1">
              {option1}
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="option2"
              autoComplete="off"
              onClick={handleMoneyButtonClick}
            />
            <label className="btn" htmlFor="option2">
              {option2}
            </label>
            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="option3"
              autoComplete="off"
              onClick={handleMoneyButtonClick}
            />
            <label className="btn" htmlFor="option3">
              {option3}
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="option4"
              autoComplete="off"
              onClick={handleMoneyButtonClick}
            />
            <label className="btn" htmlFor="option4">
              {option4}
            </label>
            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="option5"
              autoComplete="off"
              onClick={handleMoneyButtonClick}
            />
            <label className="btn" htmlFor="option5">
              {option5}
            </label>
          </div>
          <h1>Select Payment Method</h1>
          <div className="input-group">
            <div className="form-check" id="onl-donate">
              <input
                type="radio"
                className="form-check-input"
                id="radio1"
                name="optradio"
                value="Onl"
              />
              Online Donation
              <label className="form-check-label" htmlFor="radio1"></label>
            </div>
            <div className="form-check" id="off-donate">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="optradio"
                value="Off"
              />
              Offline Donation
              <label className="form-check-label" htmlFor="radio2"></label>
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
              className="form-control"
              rows="5"
              id="comment"
              name="text"
              placeholder="Leave a comment"
            ></textarea>
          </div>
          <div className="form-check">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
            Agree to term?
          </div>
          <div className="label-total">
            <div className="text-wrapper">Donation Total:</div>
          </div>
          <div className="amount">{amount}</div>
          <br />
          <div className="btn-donate">
            <button
              className="btn"
              type="submit"
              id="btn-donate"
              onClick={handleDonateButton}
            >
              Donate now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Donation;
