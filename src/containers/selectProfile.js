import React from "react";
import { Header, Profile } from "../components";
import * as ROUTES from "../routes";
import logo from "../logo.svg";

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <Header bg={false}>
      <Header.Inner>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
      </Header.Inner>

      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.Item
            onClick={() => {
              setProfile({
                photoURL: user.photoURL,
                displayName: user.displayName,
              });
            }}
          >
            <Profile.Picture url={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.Item>
        </Profile.List>
      </Profile>
    </Header>
  );
}
