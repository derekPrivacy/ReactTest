import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from './atom/Button'


import MyNavbar from "./atom/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return <MyNavbar />
  // <MyButton label={"greeting"} onClick={() => {
  //   console.log("heyheey")
  // }} />

};

export default App;
