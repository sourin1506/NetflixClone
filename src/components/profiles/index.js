import React from "react";
import { Container, Title, User, Name, Picture, List } from "./styles/profiles";
export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profile.User = function ProfileUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Profile.Picture = function ProfilePicture({ src, children, ...restProps }) {
  return (
    <>
      <Picture
        src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
        {...restProps}
      />
      {children}
    </>
  );
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
