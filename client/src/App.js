import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          {/* <Route exact path="/login" component={LoginPage} /> */}
          {/* <Route exact path="/register" component={RegisterPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
