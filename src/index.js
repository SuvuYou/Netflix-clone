import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyle } from "./globalStyles";
import { firebase } from "./lib/firebase.prob";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
