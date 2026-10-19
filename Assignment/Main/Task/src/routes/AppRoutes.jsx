import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ReactPage from "../pages/ReactPage";
import Project from "../pages/Project";
import DayOne from "../react/Day_1/DayOne";
import TaskOne from "../react/Day_1/TaskOne";
import TaskTwo from "../react/Day_1/TaskTwo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/react/day1" element={<DayOne />}>
  <Route path="task1" element={<TaskOne />} />
  <Route path="task2" element={<TaskTwo />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;