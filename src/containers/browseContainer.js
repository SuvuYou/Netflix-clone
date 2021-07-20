import React, { useContext, useState, useEffect } from "react";
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

  useEffect(() => {
    console.log(profile);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.Release />}
      <Header src="/images/misc/joker1.jpg">
        <Header.Inner>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        </Header.Inner>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
