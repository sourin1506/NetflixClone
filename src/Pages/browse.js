import React, { useContext, useEffect, useState } from "react";
import { BrowseHeader } from "../components";
import SelectedProfile from "../containers/profile";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebasecontext";
import BannerContainer from "../containers/banner";
import BrowseHeaderContainer from "../containers/browseheadercontainer";

import requestapi, { requesttvapi } from "../helpers/requestapi";
import AllRows from "../helpers/AllRows";
import AllRowsTv from "../helpers/AllRowsTv";
import { MovieDataContext } from "../context/moviedata";
import YouTube from "react-youtube";
import RowContainer from "../containers/rows";

export default function BrowseNetflix({ children }) {
  const [forcerender, setforce] = useState(false);
  const { app } = useContext(FirebaseContext);
  const { serisorflims, trailerid } = useContext(MovieDataContext);

  return (
    <>
      <BrowseHeaderContainer />
      {/* {trailerid != "" ? <YouTube videoId={trailerid} /> : ""} */}
      {serisorflims ? (
        <BannerContainer url={requestapi.fetchNetflixOriginals} />
      ) : (
        <BannerContainer url={requesttvapi.fetchNetflixOriginalsTv} />
      )}

      {serisorflims ? <AllRows /> : <AllRowsTv />}
    </>
  );
}
