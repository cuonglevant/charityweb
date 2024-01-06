import React from "react";
import "./Response.css";

function Response() {
  return (
    <div className="send-respond">
      <div className="div">
        <div className="left d-flex justify-content-between">
          <div className="box">
            <div className="group">
              <div className="get-in-touch">GET IN TOUCH</div>
            </div>
          </div>
        </div>

        <div className="send-me-a-message">Send Me A Message</div>

        <div className="address">
          <div className="group">
            <div className="text-wrapper">Address</div>
            <i className="quam-elementum">
              Quam Elementum Pulvinar Etiam Non Quam Lacus
              <br />
              suspendisse.a Scelerisque Purus Semper Eget Duis At
              <br />
              lobortisscelerisque Fermentum Dui Faucibus In Ornare....
            </i>
            <p className="location">
              <span className="span">Location : </span>
              <span className="text-wrapper-2">
                4517 Washington Ave. Manchester,
                <br />
                Kentucky 39495
              </span>
            </p>
            <p className="phone">
              <span className="span">Phone : </span>
              <span className="text-wrapper-2">+88544767456</span>
            </p>
            <p className="email">
              <span className="span">Email : </span>
              <span className="text-wrapper-2">givelifecharity@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="respondbox">
          <div className="SendRespond-container">
            <form>
              <div className="line1">
                <div className="input-box">
                  <label htmlFor="First-name" className="form-label">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="Your"
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="Last-name" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="line2">
                <div className="input-box">
                  <label htmlFor="mail" className="form-label">
                    Mail
                  </label>
                  <input
                    id="mail"
                    className="form-control"
                    type="text"
                    name="mail"
                    placeholder="Your Email"
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="form-control"
                    type=""
                    name="phone"
                    placeholder="+84"
                  />
                </div>
              </div>
              <div className="input-box">
                <div className="line3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <input
                    id="message"
                    className="form-control-message"
                    type="text"
                    name="message"
                    placeholder="Type Your Message Here..."
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="button">
          <a className="submit-btn" href="" Send Message>
            Send Message
          </a>
        </div>
      </div>
    </div>
  );
}
export default Response;
