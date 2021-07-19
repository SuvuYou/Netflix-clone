import React, { useState } from "react";
import HeaderContainer from "../containers/headerContainer";
import FooterContainer from "../containers/footer";
import { Form } from "../components";

export default function Sign_In() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Base>
            {error && <Form.Error>{error}</Form.Error>}
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
            <Form.Submit onClick={handleSubmit} disabled={isInvalid}>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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
