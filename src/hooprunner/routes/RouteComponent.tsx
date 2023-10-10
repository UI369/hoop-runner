import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import HomePage from "../../pages/HomePage";
import RegistrationForm from "../registration/registration";
import TeamsList from "../views/TeamsList";
import TeamView from "../views/TeamView";
import PlayersList from "../views/PlayersList";
import PlayerView from "../views/PlayerView";
import GamesView from "../views/GamesView";
import GamesList from "../views/GamesList";

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
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/teams/:teamId" element={<TeamView />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/players/:playerId" element={<PlayerView />} />
        <Route path="/games/:gameId" element={<GamesView />} />
        <Route path="/games" element={<GamesList />} />
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
