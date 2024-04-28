import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quizsection from "../Header/Header";
import Quizhome from "../Quiezhome/Quizhome";
import Header from "../Header/Header";


import Energypage from "../Energypage/Energypage";

import Dropdown from "../Dropdown/Dropdown";
import Rough from "../Roughslider/Rough";

import HomeHero from "../Startingheropage/Homehero";
import Lheader from "../Landingpageheader/Lheader";
import Resultpage from "../Resultpage/Resultpage";
import Login from "../Loginpage/Login";

const Routingpage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeHero />} />
          <Route path="/Lheader" element={<Lheader />} />
          <Route path="/home" element={<Quizhome />} />
         
          
          <Route path="/energy" element={<Energypage />} />

          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/rough" element={<Rough />} />
          <Route path="/result" element={<Resultpage/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Routingpage;
