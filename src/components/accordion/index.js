import React, { useState, useContext, createContext } from "react";
import {
  Title,
  Frame,
  Header,
  Item,
  Body,
  Container,
  Inner,
  Button,
} from "./styles/accordian";
const ToggleContext = createContext();

export default function Accordian({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordian.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordian.Frame = function AccordianFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordian.Header = function AccordianHeader({ children, ...restProps }) {
  const { toggle, settoggle } = useContext(ToggleContext);
  return (
    <Header {...restProps}>
      {children}
      {toggle ? (
        <img
          src="../images/icons/close-slim.png"
          onClick={() => settoggle(!toggle)}
        ></img>
      ) : (
        <img
          src="../images/icons/add.png"
          onClick={() => settoggle(!toggle)}
        ></img>
      )}
      {/* <Button onClick={() => settoggle(!toggle)}>+</Button> */}
    </Header>
  );
};
Accordian.Item = function AccordianItem({ children, ...restProps }) {
  const [toggle, settoggle] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, settoggle }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordian.Body = function AccordianBody({ children, ...restProps }) {
  const { toggle } = useContext(ToggleContext);
  return toggle ? <Body {...restProps}>{children}</Body> : null;
};
