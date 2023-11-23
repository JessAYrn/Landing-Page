import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Router from "./Router";
import "./index.scss";
import { BrowserRouter, HashRouter } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </HashRouter>,

  document.getElementById("root")
);
