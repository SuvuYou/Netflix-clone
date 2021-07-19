import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes";
import { HOME, BROWSE, SIGN_IN, SIGN_OUT } from "./pages";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HOME} />
          <Route exact path={ROUTES.BROWSE} component={BROWSE} />
          <Route exact path={ROUTES.SIGN_IN} component={SIGN_IN} />
          <Route exact path={ROUTES.SIGN_UP} component={SIGN_OUT} />
        </Switch>
      </Router>
    </div>
  );
}
