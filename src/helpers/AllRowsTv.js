import React, { useContext } from "react";
import RowContainer from "../containers/rows";
import { MovieDataContext } from "../context/moviedata";
import Mylist from "./Mylist";
import { requesttvapi } from "./requestapi";

export default function AllRowsTv() {
  const { movie } = useContext(MovieDataContext);
  return (
    <>
      <Mylist />
      {movie.Top_Results?.length ? (
        <RowContainer title="Top_Results" islarge={true} />
      ) : (
        ""
      )}
      <RowContainer
        title="Trending"
        url={requesttvapi.fetchTrendingTv}
        islarge={true}
      />
      <RowContainer
        title="Top_Rated"
        url={requesttvapi.fetchTopRatedTv}
        islarge={false}
      />
      <RowContainer
        title="Comedy"
        url={requesttvapi.fetchComedyTv}
        islarge={false}
      />
      <RowContainer
        title="Romance"
        url={requesttvapi.fetchRomanceTv}
        islarge={false}
      />
      <RowContainer
        title="Action"
        url={requesttvapi.fetchActionTv}
        islarge={false}
      />
      <RowContainer
        title="Sc_fi"
        url={requesttvapi.fetchScifiTv}
        islarge={false}
      />
      <RowContainer
        title="Documentaries"
        url={requesttvapi.fetchDocumentariesTv}
        islarge={false}
      />
    </>
  );
}
