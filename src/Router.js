import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <nav>Nav</nav>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  );
};

export default Router;
