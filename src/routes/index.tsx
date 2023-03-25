import React from "react";
import { Route, Routes } from "react-router-dom";

// Add your components here
import PrivateRoutes from "../components/PrivateRoutes";
import About from "./About";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        {/* Add component that need authentication */}
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Add more routes below */}
    </Routes>
  );
};

export default MainRoutes;
