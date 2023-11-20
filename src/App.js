import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes";
import { HOME, BROWSE, SIGN_IN, SIGN_UP } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.HOME}
          >
            <HOME />
          </IsUserRedirect>

          <ProtectedRoute
            user={user}
            loggedOutPath={ROUTES.SIGN_IN}
            exact
            path={ROUTES.BROWSE}
          >
            <BROWSE />
          </ProtectedRoute>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.SIGN_IN}
          >
            <SIGN_IN />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.SIGN_UP}
          >
            <SIGN_UP />
          </IsUserRedirect>
        </Switch>
      </Router>
    </div>
  );
}
