import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Q1 from "./pages/Q1";
import Q2 from "./pages/Q2";
import Q3 from "./pages/Q3";
import Q4 from "./pages/Q4";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import MyNav from "./atom/MyNavbar";

const routing = (
  <Router>
    <Route path="/" component={App} />
    <div
      style={{
        paddingLeft: "50px",
        paddingRight: "50px"
      }}
    >
      {/* user page related */}
      <Route path="/Q1" component={Q1} />
      <Route path="/Q2" component={Q2} />
      <Route path="/Q3" component={Q3} />
      <Route path="/Q4" component={Q4} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
