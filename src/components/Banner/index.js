import React from "react";
import { Banner } from "..";
import {
  Container,
  Name,
  ButtonGroup,
  Description,
  Button,
  Header,
  FadeBottom,
} from "./styles/banner";
export default function BannerContents({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
BannerContents.Name = function BannerContentsName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
BannerContents.ButtonGroup = function BannerContentsButtonGroup({
  children,
  ...restProps
}) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

BannerContents.Description = function BannerContentsDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};
BannerContents.Button = function BannerContentsButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};
BannerContents.Header = function BannerContentsHeader({
  url,
  children,
  ...restProps
}) {
  return <Header {...restProps}>{children}</Header>;
};
BannerContents.FadeBottom = function BannerContentFadeBottom({
  children,
  ...restProps
}) {
  return <FadeBottom {...restProps}>{children}</FadeBottom>;
};
