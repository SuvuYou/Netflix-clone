import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes";
import { HOME, BROWSE, SIGN_IN, SIGN_OUT } from "./pages";

import FooterContainer from "./containers/footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            {HOME}
          </Route>
          <Route exact path={ROUTES.BROWSE}>
            {BROWSE}
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            {SIGN_IN}
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            {SIGN_OUT}
          </Route>
        </Switch>
        <FooterContainer />
      </Router>
    </div>
  );
}
