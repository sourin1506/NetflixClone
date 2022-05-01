import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Header } from "../components";
import Profile from "../components/profiles";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import sr from "../images/users/5.png";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../context/RegisterContext";
export default function SelectedProfile({ user, children }) {
  const { Registerdata } = useContext(RegisterContext);
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/browse");
  };
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.Home} src={logo} />
          <Header.ButtonLink to={ROUTES.Signin}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
      <Profile>
        <Profile.Title>Who's Watching</Profile.Title>
        <Profile.List>
          <Profile.User>
            <Profile.Picture src={user.pic} onClick={handleclick} />
            <Profile.Name>{user.username}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
