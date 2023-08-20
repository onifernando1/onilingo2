import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonManager from "./components/LessonManager";
import React from "react";
import Lesson from "./components/Lesson";
import Home from "./pages/Home";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<Lesson />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
