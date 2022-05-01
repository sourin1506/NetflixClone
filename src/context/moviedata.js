import React from "react";
import { useState, createContext } from "react";
export const MovieDataContext = createContext();

export default function MovieDataContextProvider(props) {
  const [movie, setmovie] = useState({
    Trending: [],
    Top_Rated: [],
    Comedy: [],
    Action: [],
    Romance: [],
    Sc_fi: [],
    Documentaries: [],
    List: [],
    Top_Results: [],
    Netflix_Originals: [],
  });
  const [banner, setbanner] = useState({});
  const [selectedmovie, setselected] = useState(null);
  const [searchdata, setsearchdata] = useState({});
  const [searchinput, setsearchinput] = useState("");
  const [serisorflims, setserisorflims] = useState(true);
  const [mylist, setmylist] = useState(false);
  const [trailerid, settrailerid] = useState("");
  return (
    <MovieDataContext.Provider
      value={{
        movie,
        setmovie,
        banner,
        setbanner,
        selectedmovie,
        setselected,
        searchdata,
        setsearchdata,
        serisorflims,
        setserisorflims,
        searchinput,
        setsearchinput,
        mylist,
        setmylist,
        trailerid,
        settrailerid,
      }}
    >
      {props.children}
    </MovieDataContext.Provider>
  );
}
