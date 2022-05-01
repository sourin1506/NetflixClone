import React, { useContext } from "react";
import RowContainer from "../containers/rows";
import { MovieDataContext } from "../context/moviedata";
import requestmovieapi from "./requestapi";

export default function Mylist() {
  const { movie, mylist } = useContext(MovieDataContext);
  return (
    <>
      {mylist && movie.List.length ? (
        <RowContainer title="List" islarge={true} />
      ) : (
        ""
      )}
    </>
  );
}
