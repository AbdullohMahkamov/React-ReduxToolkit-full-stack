import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Register, Login, Navbar, ForgotPass } from "..";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
      </Routes>
    </div>
  );
};

export default App;
