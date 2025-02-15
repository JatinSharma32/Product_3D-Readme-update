import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import './index.css'
import Faq from "./views/app/Faq";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Faq} path="/faq"/>
        <Route Component={ErrorPage} path="/*"/>
        <Route Component={Login} path="/login"/>
        <Route Component={SignUp} path="/signup"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
