import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyle } from "./globalStyles";
import { firebase } from "./lib/firebase.prob";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <React.Fragment>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.Fragment>,
  document.getElementById("root")
);
