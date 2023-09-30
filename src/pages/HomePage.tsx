import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Grass Valley Draft League</h1>
      <div className="internalLink">
        <Link to={`/teams/`}>View Teams</Link>
      </div>
      <div className="internalLink">
        <Link to={`/games/`}>View Games</Link>
      </div>
    </div>
  );
};

export default HomePage;
