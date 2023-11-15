import React from "react";

import "./index.css";
import Donation from "./pages/Donation";
import "./pages/Account/Account.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Volunteer from "./pages/Volunteer";
import { ROUTES } from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.DONATION_PATH} element={<Donation />} />
          <Route path={ROUTES.ACCOUNT_PATH} element={<Account />} />
          <Route path={ROUTES.VOLUNTEER_PATH} element={<Volunteer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
