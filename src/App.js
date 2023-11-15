import React from "react";
import "./index.css";
import Donation from "./pages/Donation";
import Login from "./pages/Login";
import "./pages/Account/Account.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Volunteer from "./pages/Volunteer";
import { ROUTES } from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Response from "./pages/Response";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME_PATH} element={<Home />} />
          <Route path={ROUTES.LOGIN_PATH} element={<Login />} />
          <Route path={ROUTES.DONATION_PATH} element={<Donation />} />
          <Route path={ROUTES.ACCOUNT_PATH} element={<Account />} />
          <Route path={ROUTES.VOLUNTEER_PATH} element={<Volunteer />} />
          <Route path={ROUTES.RESPONSE_PATH} element={<Response />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
