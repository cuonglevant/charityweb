import React from 'react'
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import Logo from "../../assets/img/Logo.png";

function Login() {
  return (
    <div className="login-page">
      <div className="logo">
        <img src={Logo} alt="logo"  />
      </div>
      <div className="login">
        <div className="login-title"><h2>Login for the charity social</h2></div>
        <div className="login-form">
          <div className="username">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" className="login-input" placeholder="Username" />
          </div>
          <div className="password">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" className="login-input" placeholder="Password" />
          </div>
          <div className="login-btn"> <button>Login</button>  </div>
          <div className="register-btn">Don't have an account? Register</div>
        </div>
      </div>
    </div>
    )
}

export default Login
