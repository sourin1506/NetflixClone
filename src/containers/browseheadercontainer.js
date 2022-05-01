import React, { useContext } from "react";
import { BrowseHeader } from "../components";
import SelectedProfile from "../containers/profile";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebasecontext";
import { MovieDataContext } from "../context/moviedata";
import { RegisterContext } from "../context/RegisterContext";

export default function BrowseHeaderContainer({ children }) {
  const { app, Userdata } = useContext(FirebaseContext);
  const { Registerdata } = useContext(RegisterContext);
  const { setserisorflims, setmylist, mylist, settrailerid } =
    useContext(MovieDataContext);
  return (
    <>
      <BrowseHeader bg={false}>
        <BrowseHeader.Frame>
          <BrowseHeader.Logo to="/" src={logo} />
          <BrowseHeader.HyperLink
            onClick={() => {
              setserisorflims(false);
              settrailerid("");
            }}
          >
            Series
          </BrowseHeader.HyperLink>
          <BrowseHeader.HyperLink
            onClick={() => {
              setserisorflims(true);
              settrailerid("");
            }}
          >
            Flim
          </BrowseHeader.HyperLink>
          <BrowseHeader.HyperLink
            onClick={() => {
              setmylist(!mylist);
              settrailerid("");
            }}
          >
            My List
          </BrowseHeader.HyperLink>
          <BrowseHeader.Search></BrowseHeader.Search>
          <BrowseHeader.Logo
            to="/profilescreen"
            src={
              app.currentUser
                ? `/images/users/${Userdata.pic}.png`
                : `/images/users/1.png`
            }
          />
          {/* actually app.currentUser was null itself thats why the problem */}
        </BrowseHeader.Frame>

        {children}
      </BrowseHeader>
    </>
  );
}
