import React, { useContext } from "react";
import RowContainer from "../containers/rows";
import { MovieDataContext } from "../context/moviedata";
import Mylist from "./Mylist";
import requestmovieapi from "./requestapi";

export default function AllRows() {
  const { movie, mylist } = useContext(MovieDataContext);
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
        url={requestmovieapi.fetchTrendingMovies}
        islarge={true}
      />
      <RowContainer
        title="Top_Rated"
        url={requestmovieapi.fetchTopRatedMovies}
        islarge={false}
      />
      <RowContainer
        title="Comedy"
        url={requestmovieapi.fetchComedyMovies}
        islarge={false}
      />
      <RowContainer
        title="Romance"
        url={requestmovieapi.fetchRomanceMovies}
        islarge={false}
      />
      <RowContainer
        title="Action"
        url={requestmovieapi.fetchActionMovies}
        islarge={false}
      />
      <RowContainer
        title="Sc_fi"
        url={requestmovieapi.fetchScifiMovies}
        islarge={false}
      />
      <RowContainer
        title="Documentaries"
        url={requestmovieapi.fetchDocumentariesMovies}
        islarge={false}
      />
    </>
  );
}
