import React from "react";
import {
  Container,
  Link,
  LinkBox,
  BoxContainer,
  Title,
  Text,
} from "./styles/footer";

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

Footer.Title = function FooterTitle({ children }) {
  return <Title>{children}</Title>;
};

Footer.Text = function FooterText({ children }) {
  return <Text>{children}</Text>;
};

Footer.Link = function FooterLink({ children, src }) {
  return (
    <LinkBox>
      <Link href={src}>{children}</Link>
    </LinkBox>
  );
};

Footer.BoxContainer = function FooterBoxContainer({ children }) {
  return <BoxContainer>{children}</BoxContainer>;
};
