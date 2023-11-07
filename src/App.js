import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { ROUTES } from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME_PATH} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
