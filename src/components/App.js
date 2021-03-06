import React from "react";
import "./App.css";
import Base from "./Base";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "../apis/History";
//Here we define Routes
//Later, in app we can move to defined routes
function App() {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact>
          <Base myPage={"Content"} />
        </Route>
        <Route path="/About-us" exact>
          <Base myPage={"AboutUs"} />
        </Route>
        <Route path="/Content" exact>
          <Base myPage={"Content"} />
        </Route>
        <Route path="/Content2" exact>
          <Base myPage={"Content2"} />
        </Route>
        <Route path="/Login" exact>
          <Base myPage={"Login"} />
        </Route>
        <Route path="/Createdata" exact>
          <Base myPage={"Createdata"} />
        </Route>
        <Route path="/ScoreCalculator" exact>
          <Base myPage={"ScoreCalculator"} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
