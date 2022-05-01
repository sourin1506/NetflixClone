import React from "react";
import {
  Body,
  Title,
  SubTitle,
  Info,
  Avatar,
  Details,
  Plans,
  Button,
  Container,
} from "./styles/profilescreen";
export default function ProfileScreen({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
ProfileScreen.Body = function ProfileScreenBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};
ProfileScreen.Title = function ProfileScreenTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
ProfileScreen.SubTitle = function ProfileScreenSubTitle({ children, ...rest }) {
  return <SubTitle {...rest}>{children}</SubTitle>;
};
ProfileScreen.Info = function ProfileScreenInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};
ProfileScreen.Avatar = function ProfileScreenAvatar({ children, ...rest }) {
  return <Avatar {...rest}>{children}</Avatar>;
};
ProfileScreen.Details = function ProfileScreenDetails({ children, ...rest }) {
  return <Details {...rest}>{children}</Details>;
};
ProfileScreen.Plans = function ProfileScreenPlans({ children, ...rest }) {
  return <Plans {...rest}>{children}</Plans>;
};
ProfileScreen.Button = function ProfileScreenButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
