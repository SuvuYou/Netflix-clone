import React from "react";
import {
  Inner,
  ChildrenBox,
  Container,
  Title,
  SubTitle,
  Image,
  MainBox,
} from "./styles/jumbotron";

export default function Jumbotron({ children, direction = "row" }) {
  return (
    <MainBox>
      <Inner direction={direction}>{children}</Inner>
    </MainBox>
  );
}

Jumbotron.Container = function JumbotronContainer({ children }) {
  return <Container>{children}</Container>;
};

Jumbotron.ChildrenBox = function JumbotronChildrenBox({ children }) {
  return <ChildrenBox>{children}</ChildrenBox>;
};

Jumbotron.Title = function JumbotronTitle({ children }) {
  return <Title>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ src, alt }) {
  return <Image src={src} alt={alt} />;
};
