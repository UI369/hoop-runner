import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a placeholder page for HomePage.</p>
      <Link to={`/teams/`}>View Teams</Link>
    </div>
  );
};

export default HomePage;
