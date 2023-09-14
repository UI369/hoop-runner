import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import HomePage from "../../pages/HomePage";
import TeamsList from "../TeamsList";
import TeamView from "../TeamView";
import PlayersList from "../PlayersList";
import PlayerView from "../PlayerView";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated() ? <>{children}</> : <Navigate to="/" replace />;
};

const RouteComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/teams/:teamId" element={<TeamView />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/players/:playerId" element={<PlayerView />} />
        <Route
          path="/private"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
