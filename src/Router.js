import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";

// console.log(Login);
// console.log(Login());
// console.log(<Login />);

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path='/' element={Login()} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
