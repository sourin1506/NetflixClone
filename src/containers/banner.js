import React, { useState, useEffect, useContext } from "react";
import BannerContents from "../components/Banner";
import "../index.css";
import { MovieDataContext } from "../context/moviedata";
import YouTube from "react-youtube";
export default function BannerContainer({ url }) {
  let baseurl = "https://image.tmdb.org/t/p/original";
  const {
    banner,
    setbanner,
    selectedmovie,
    setmovie,
    movie,
    trailerid,
    settrailerid,
    serisorflims,
    searchinput,
  } = useContext(MovieDataContext);
  const [videotrailer, setvideotrailer] = useState([]);
  useEffect(() => {
    selectedmovie ? setbanner(selectedmovie) : getrandmovie();
  }, [selectedmovie, url]);
  const getrandmovie = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let rand = Math.floor(Math.random() * (data.results.length - 1));
        setbanner(data.results[rand]);
      });
  };
  const mylist = (title) => {
    movie.List.push(banner);
    //for the screen to re-render and thus show the list in real time
    setmovie((prevData) => ({
      ...prevData,
    }));
    console.log(movie.List);
  };

  const gettrailer = () => {
    console.log(banner.id);
    let videourl = "";
    serisorflims || searchinput
      ? (videourl = `https://api.themoviedb.org/3/movie/${banner.id}?api_key=ce568f0c12602e9e60745bbaa712e547&append_to_response=videos`)
      : (videourl = `https://api.themoviedb.org/3/tv/${banner.id}?api_key=ce568f0c12602e9e60745bbaa712e547&append_to_response=videos`);
    //let videourl = `https://api.themoviedb.org/3/movie/${banner.id}?api_key=ce568f0c12602e9e60745bbaa712e547&append_to_response=videos`;
    fetch(videourl)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.videos.results.length == 0) alert("No trailer");
        setvideotrailer(data.videos.results);
      })
      .catch((err) => console.log(err));
  };
  const gettrailerlink = () => {
    //const regex = new RegExp(`SpiderMans`, "gi");
    const regex = new RegExp(`trailer`, "gi");
    const newreg = new RegExp(`official trailer`, "gi");

    let official_id = [];
    let trailer_id = videotrailer;
    // console.log(videotrailer);
    if (videotrailer.length > 1)
      trailer_id = videotrailer.filter(
        (data) => data.type == "Trailer" && data.name.toLowerCase().match(regex)
      );

    // console.log(trailer_id.length);
    if (trailer_id.length > 1)
      official_id = trailer_id.filter((data) =>
        data.name.toLowerCase().match(newreg)
      );
    settrailerid(official_id.length ? official_id[0].key : trailer_id[0].key);

    //console.log(official_id.length != 0 ? official_id : trailer_id);
    //console.log(trailer_id.filter((data) => data.name.match(regex)));
  };

  useEffect(() => {
    if (videotrailer.length) {
      gettrailerlink();
    }
  }, [videotrailer]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      {trailerid != "" ? (
        <YouTube
          videoId={trailerid}
          opts={{
            width: "100%",
            height: "500px",
            position: "absolute",
            playerVars: {
              autoplay: 1,
              controls: 1,
              cc_load_policy: 0,
              fs: 1,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      ) : (
        <header
          style={{
            backgroundImage: `url(${baseurl}${
              banner.backdrop_path == undefined
                ? "/g18jnJuhIujMYErHqeG5t8U5F9X.jpg"
                : banner.backdrop_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            objectFit: "contain",
            height: "100%",
            width: "100%",
            minHeight: "50vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <BannerContents>
            <BannerContents.Name>
              {" "}
              {banner.title || banner.original_title || banner.name}
            </BannerContents.Name>
            <BannerContents.ButtonGroup>
              <BannerContents.Button onClick={() => gettrailer()}>
                Play
              </BannerContents.Button>
              <BannerContents.Button onClick={() => mylist("List")}>
                List
              </BannerContents.Button>
            </BannerContents.ButtonGroup>

            <BannerContents.Description>
              {truncate(banner?.overview, 300)}
            </BannerContents.Description>
          </BannerContents>
          <BannerContents.FadeBottom></BannerContents.FadeBottom>
        </header>
      )}
    </>
  );
}
