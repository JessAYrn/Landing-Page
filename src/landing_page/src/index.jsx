import * as React from "react";
import * as ReactDOM from "react-dom";
import Router from "./Router";
import "./index.scss";
import {  HashRouter } from "react-router-dom";


ReactDOM.render(
  <HashRouter>
      <Router />
  </HashRouter>,

  document.getElementById("root")
);
