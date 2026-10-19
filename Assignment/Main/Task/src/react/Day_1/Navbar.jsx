import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="task1">
  Task 1
</NavLink>

      <NavLink to="task2">
        <button>Task 2</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;