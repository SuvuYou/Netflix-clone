import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import HeaderContainer from "../containers/headerContainer";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../routes";

export default function SIGN_UP() {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = firstName === "" || password === "" || email === "";

  function handleSignUp(e) {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((err) => {
        setfirstName("");
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          <Form.Base>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setfirstName(target.value)}
            />
            <Form.Input
              type="text"
              placeholder="Email adress"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit onClick={handleSignUp} disabled={isInvalid}>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already have an account?{"   "}
            <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>

          <Form.SmallText>
            This page is protected by Google reCAPCHA
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
