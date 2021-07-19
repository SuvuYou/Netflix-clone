import React, { useState, useContext } from "react";
import {
  Body,
  Container,
  Title,
  Frame,
  Rectangle,
  MainTitle,
} from "./styles/accordian";

const showContext = React.createContext();
const toggleShowContext = React.createContext();

export default function Accordion({ children }) {
  return <Container>{children}</Container>;
}

Accordion.Title = function AccordionTitle({ children }) {
  return <Title>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <showContext.Provider value={show}>
      <toggleShowContext.Provider value={toggleShow}>
        <Frame>{children}</Frame>
      </toggleShowContext.Provider>
    </showContext.Provider>
  );
};

Accordion.Body = function AccordionBody({ children }) {
  const show = useContext(showContext);

  return show ? <Body>{children}</Body> : "";
};

Accordion.Rectangle = function AccordionRectangle({ children }) {
  const toggleShow = useContext(toggleShowContext);
  const show = useContext(showContext);

  return (
    <Rectangle onClick={toggleShow}>
      {children}
      {show ? (
        <img width="25px" height="25px" src="/images/icons/close-slim.png" />
      ) : (
        <img width="25px" height="25px" src="/images/icons/add.png" />
      )}
    </Rectangle>
  );
};

Accordion.MainTitle = function AccordionMainTitle({ children }) {
  return <MainTitle>{children}</MainTitle>;
};
