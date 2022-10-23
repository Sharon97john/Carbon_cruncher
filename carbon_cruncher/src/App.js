import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Rewards from "./components/Rewards";
import Gamification from "./components/Gamification";
import "./App.scss";
import {
  Route,
  Routes,
  // Navigate,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={<Dashboard className="background-clr" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/challenge"
            element={<Gamification className="background-clr" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/rewards"
            element={<Rewards className="background-clr" />}
          />
        </Routes>
      </Router>
    </div>
  );
}
