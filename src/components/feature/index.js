import React from "react";
import { Container, Text, MainTitle, WelcomeTitle } from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.MainTitle = function FeatureMainTitle({ children, ...restProps }) {
  return <MainTitle {...restProps}>{children}</MainTitle>;
};

Feature.WelcomeTitle = function FeatureWelcomeTitle({
  children,
  ...restProps
}) {
  return <WelcomeTitle {...restProps}>{children}</WelcomeTitle>;
};

Feature.Text = function FeatureText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
