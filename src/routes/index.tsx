import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import About from "./About";

// Add your components here
import Login from "./Auth/Login";
import Home from "./Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Add more routes below */}
    </Routes>
  );
};

export default MainRoutes;
