import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard.js";
import Course from "./components/Course.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/course">
          <Course />
        </Route>
      </Switch>
    </Router>
  );
}
