import React from "react";
import { Header } from "../components";
import * as ROUTES from "../routes";
import logo from "../logo.svg";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Inner>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>SIGN IN</Header.ButtonLink>
      </Header.Inner>
      {children}
    </Header>
  );
}
