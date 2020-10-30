import React from "react";
import "./App.css";
import Base from "./Base";
import Content from "./Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "../apis/History";

function AboutUs() {
  return (
    <div>
      This website is still under development, if you have any suggestions,
      please contact developer
    </div>
  );
}

export default AboutUs;
