import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
export default function HeaderContainer({ bg = true, children }) {
  return (
    <Header bg={bg}>
      <Header.Frame>
        <Header.Logo to={ROUTES.Home} src={logo} />
        <Header.ButtonLink to={ROUTES.Signin}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
