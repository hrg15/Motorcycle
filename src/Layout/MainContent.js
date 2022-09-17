import React from "react";
import { Routes, Route } from "react-router-dom";

import Motorcycles from "../Components/Motorcycles/Motorcycles";
import MainBox from "../Ui/MainBox";
import AddMotor from "../Components/AddMotor/AddMotor";
import About from "../Components/About";

const MainContent = () => {
  return (
    <MainBox>
      <Routes>
        <Route path="/" element={<Motorcycles />} />
        <Route path="/add-motor" element={<AddMotor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainBox>
  );
};

export default MainContent;
