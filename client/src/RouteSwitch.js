import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonManager from "./components/LessonManager";
import React from "react";
import Lesson from "./components/Lesson";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LessonManager />} />
          <Route path="/lesson" element={<Lesson />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
