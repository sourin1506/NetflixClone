import React, { useEffect, useState, useContext, useRef } from "react";
import Row from "../components/rows";
import "../index.css";

import Rows from "../components/rows";
import { MovieDataContext } from "../context/moviedata";
import { FirebaseContext } from "../context/firebasecontext";
import { getDoc, doc } from "firebase/firestore";
import SkeletonCards from "../Skeleton/skeleton";
export default function RowContainer({ title, url, islarge }) {
  const { movie, setmovie, selectedmovie, setselected, settrailerid } =
    useContext(MovieDataContext);
  const { app, db, Userdata, setUserdata } = useContext(FirebaseContext);
  const [loading, setloading] = useState(true);

  let baseurl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    getMovies();
  }, [url]);

  useEffect(() => {
    console.log("useeffect");
    if (app.currentUser == null) getUsers("wcykoABjb5azukjT73ocAIJmjMa2");
    else getUsers(app.currentUser.uid);
  }, []);

  const getUsers = (id) => {
    const docRef = doc(db, "LoginData", id);
    getDoc(docRef).then((doc) => setUserdata(doc.data()));
  };

  const getMovies = () => {
    console.log(movie[title].length);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setmovie((prevState) => ({
          ...prevState,
          [title]: data.results,
        }));
      })
      .catch((err) => console.log(err.message));
  };
  const handleload = () => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  };
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  return (
    <Rows>
      <Rows.Title islarge={islarge}>{title.replace("_", " ")}</Rows.Title>

      <Rows.Posters islarge={islarge}>
        {movie[title] == undefined
          ? ""
          : movie[title].map((src, i) => (
              <>
                {src.poster_path && src.backdrop_path ? (
                  <>
                    <img
                      src="/images/misc/loading.gif"
                      style={{
                        visibility: loading ? "visible" : "hidden",
                        display: loading ? "" : "none",
                      }}
                    />
                    <Rows.Poster
                      style={{ display: loading ? "none" : "block" }}
                      onLoad={() => {
                        if (title != "List")
                          setTimeout(() => {
                            setloading(false);
                          }, 1000);
                        else setloading(false);
                      }}
                      islarge={islarge}
                      key={i}
                      src={`${baseurl}${
                        islarge ? src.poster_path : src.backdrop_path
                      }`}
                      onClick={() => {
                        setselected(src);
                        settrailerid("");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        //setting trailer url
                      }}
                    />
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
      </Rows.Posters>
    </Rows>
  );
}
