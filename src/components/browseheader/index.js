import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Frame,
  Logo,
  Background,
  ButtonLink,
  HyperLink,
  Search,
  SearchIcon,
  SearchInput,
} from "./styles/browseheader";
import { Link } from "react-router-dom";
import { MovieDataContext } from "../../context/moviedata";

export default function BrowseHeader({ children, ...restProps }) {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleshow(true);
      else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <Background show={show} {...restProps}>
      {children}
    </Background>
  );
}
BrowseHeader.Frame = function BrowseHeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
BrowseHeader.Logo = function BrowseHeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
BrowseHeader.ButtonLink = function BrowseHeaderButtonLink({
  to,
  children,
  ...restProps
}) {
  return <ButtonLink to={to}>{children}</ButtonLink>;
};
BrowseHeader.HyperLink = function BrowseHyperLink({ children, ...restProps }) {
  return <HyperLink {...restProps}>{children}</HyperLink>;
};
//   BrowseHeader.Linki=function BrowseHeaderLink({ to ,children,...restProps})
//   {
//       return (<Linki to={to} {...restProps}>
//      {children}
//     </Linki>)
//   }

BrowseHeader.Search = function BrowseHeaderSearch({ children, ...restProps }) {
  const [searchactive, setsearchactive] = useState(false);
  const { searchdata, setsearchdata, searchinput, setsearchinput, setmovie } =
    useContext(MovieDataContext);
  useEffect(() => {
    if (searchactive == false) {
      setmovie((prevState) => ({
        ...prevState,
        Top_Results: [],
      }));
      setsearchinput("");
    }
  }, [searchactive]);
  const getsearchdata = () => {
    if (searchinput) {
      console.log(searchinput, "inside if");
      let url = `https://api.themoviedb.org/3/search/multi?api_key=ce568f0c12602e9e60745bbaa712e547&query=${searchinput}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.results.length)
            setmovie((prevState) => ({
              ...prevState,
              Top_Results: data.results,
            }));
          else alert("No Search found");
        })
        .catch(() => console.log("error"));
      console.log(searchinput, "inside if");
    } else console.log(searchinput, "inside else");
  };
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setsearchactive(!searchactive)}>
        <img src="/images/icons/search.png" />
      </SearchIcon>
      <SearchInput
        value={searchinput}
        onChange={(e) => setsearchinput(e.target.value)}
        onKeyDown={(e) =>
          searchinput && e.key === "Enter"
            ? getsearchdata()
            : console.log("not clicked")
        }
        active={searchactive}
      ></SearchInput>
    </Search>
  );
};
