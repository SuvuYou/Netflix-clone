import React from "react";
import {
  Container,
  Base,
  Input,
  Submit,
  Text,
  SmallText,
  Link,
  Error,
  Title,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FromBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Input = function FromInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Submit = function FromSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.SmallText = function FromSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Form.Text = function FromText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Error = function FromError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Link = function FromLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Title = function FromTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
