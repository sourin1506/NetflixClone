import React from "react";
import {
  Container,
  Row,
  Column,
  Text,
  Title,
  Link,
  Break,
} from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FotterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Footer.Column = function FotterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};
Footer.Text = function FotterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Footer.Link = function FotterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Footer.Title = function FotterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Break = function FotterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};
