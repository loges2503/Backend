import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const DayOne = () => {
  return (
    <div>
      <h1>React - Day 1</h1>

      <Navbar />

      <hr />

      <Outlet />
    </div>
  );
};

export default DayOne;