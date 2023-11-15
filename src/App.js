import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { ROUTES } from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Response from "./pages/Response";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME_PATH} element={<Home />} />
          <Route path={ROUTES.RESPONSE_PATH} element={<Response />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
