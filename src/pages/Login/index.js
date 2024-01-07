<<<<<<< HEAD
import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
=======
import React from 'react'
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 6a82ea3 (feat: update homepage)

import Logo from "../../assets/img/Logo.png";

function Login() {
  return (
    <div className="login-page">
      <div className="logo">
<<<<<<< HEAD
        <img src={Logo} alt="logo" />
      </div>
      <div className="login">
        <div className="login-title">
          <h2>Login for the charity social</h2>
        </div>
=======
        <img src={Logo} alt="logo"  />
      </div>
      <div className="login">
        <div className="login-title"><h2>Login for the charity social</h2></div>
>>>>>>> 6a82ea3 (feat: update homepage)
        <div className="login-form">
          <div className="username">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" className="login-input" placeholder="Username" />
          </div>
          <div className="password">
            <FontAwesomeIcon icon={faLock} />
<<<<<<< HEAD
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
          </div>
          <div className="login-btn">
            {" "}
            <button>Login</button>{" "}
          </div>
=======
            <input type="password" className="login-input" placeholder="Password" />
          </div>
          <div className="login-btn"> <button>Login</button>  </div>
>>>>>>> 6a82ea3 (feat: update homepage)
          <div className="register-btn">Don't have an account? Register</div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}

export default Login;
=======
    )
}

export default Login
>>>>>>> 6a82ea3 (feat: update homepage)
