import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonManager from "./components/LessonManager";

const RouteSwitch = () => {
  <BrowserRouter>
    <Router>
      <Route path="/" element={<LessonManager />} />
    </Router>
  </BrowserRouter>;
};

export default RouteSwitch;
