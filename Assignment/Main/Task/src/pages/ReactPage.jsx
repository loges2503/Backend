import { Link } from "react-router-dom";

const ReactPage = () => {
  return (
    <div className="react-page">
      <h1>React Practice</h1>

      <div className="day-container">

        <Link to="/react/day1">
          <div className="day-card">
            <h2>Day 1</h2>
          </div>
        </Link>

        <Link to="/react/day2">
          <div className="day-card">
            <h2>Day 2</h2>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ReactPage;