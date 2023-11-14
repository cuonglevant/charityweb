import React from "react";

import "./index.css";
import Donation from "./pages/Donation";
import { ROUTES } from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path={ROUTES.HOME_PATH} element={<Home />} /> */}
          <Route path={ROUTES.DONATION_PATH} element={<Donation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
