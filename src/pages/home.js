import React from "react";
import AccordionContainer from "../containers/accordian";
import JumbotronContainer from "../containers/jumbotron";
import HeaderContainer from "../containers/headerContainer";
import { OptForm, Feature } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.WelcomeTitle>Welcome back</Feature.WelcomeTitle>
          <Feature.MainTitle>
            Unlimited movies, TV shows, and more.
          </Feature.MainTitle>
          <Feature.Text>Watch anywhere. Cancel anytime.</Feature.Text>
          <OptForm>
            <OptForm.Input placeholder="Email adress"></OptForm.Input>
            <OptForm.Btn>Try it now</OptForm.Btn>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
    </>
  );
}
