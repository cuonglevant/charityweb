import React from "react";

import "./index.css";
import Donation from "./pages/Donation";
<<<<<<< HEAD
=======
import "./pages/Account/Account.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Volunteer from "./pages/Volunteer";
>>>>>>> e5ad887 (feat/volunteer&account(undone))
import { ROUTES } from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.DONATION_PATH} element={<Donation />} />
<<<<<<< HEAD
=======
          <Route path={ROUTES.ACCOUNT_PATH} element={<Account />} />
          <Route path={ROUTES.VOLUNTEER_PATH} element={<Volunteer />} />
>>>>>>> e5ad887 (feat/volunteer&account(undone))
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
