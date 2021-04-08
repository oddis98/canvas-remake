import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard.js";
import Course from "./components/Course.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/canvas-remake">
          <Dashboard />
        </Route>
        <Route exact path="/canvas-remake/course">
          <Course />
        </Route>
      </Switch>
    </Router>
  );
}
