import React from "react";
import {
  Inner,
  Container,
  Wrap,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

export default function Jumbotron({
  direction = "row",
  children,
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Wrap = function JumbotronWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
