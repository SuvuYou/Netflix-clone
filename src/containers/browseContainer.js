import React, { useContext, useState, useEffect, useRef } from "react";
import SelectProfileContainer from "../containers/selectProfile";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../routes";

export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);

  const user = firebase.auth().currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setloading] = useState(true);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log(profile);
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.Release />}
      <Header dontShowOnSmallScreen src="/images/misc/joker1.jpg">
        <Header.Inner>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            <Header.TextLink href="#">Series</Header.TextLink>
            <Header.TextLink href="#">Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextSmall>{user.displayName}</Header.TextSmall>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink
                    onClick={() => {
                      firebase.auth().signOut();
                    }}
                  >
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Inner>

        <Header.Feature>
          <Header.Text>Watch Joker Now</Header.Text>
          <Header.TextSmall>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.TextSmall>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
