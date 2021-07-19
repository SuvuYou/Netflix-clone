import React from "react";
import { Container, Input, Btn, Text } from "./styles/opt-form";

export default function OptForm({ children }) {
  return <Container>{children}</Container>;
}

OptForm.Input = function OptInput({ children, placeholder }) {
  return (
    <Input type="email" placeholder={placeholder}>
      {children}
    </Input>
  );
};

OptForm.Btn = function OptBtn({ children, ...restProps }) {
  return (
    <Btn {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="try now" />
    </Btn>
  );
};

OptForm.Text = function OptText({ children }) {
  return <Text>{children}</Text>;
};
