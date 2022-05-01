let API_KEY = "ce568f0c12602e9e60745bbaa712e547";
let baseurl = "https://api.themoviedb.org/3";
const requestmovieapi = {
  fetchTrendingMovies: `${baseurl}/trending/movie/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${baseurl}/discover/movie?api_key=${API_KEY}&language=en-US)`,
  fetchTopRatedMovies: `${baseurl}/movie/top_rated?api_key=${API_KEY}&language%=en-US`,
  fetchActionMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScifiMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchDocumentariesMovies: `${baseurl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export const requesttvapi = {
  fetchTrendingTv: `${baseurl}/trending/tv/week?api_key=${API_KEY}`,
  fetchNetflixOriginalsTv: `${baseurl}/discover/tv?api_key=${API_KEY}&language=en-US)`,
  fetchActionTv: `${baseurl}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10759`,
  fetchComedyTv: `${baseurl}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35`,
  fetchTopRatedTv: `${baseurl}/tv/top_rated?api_key=${API_KEY}&language%=en-US`,
  fetchRomanceTv: `${baseurl}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=18`,
  fetchScifiTv: `${baseurl}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10765`,
  fetchDocumentariesTv: `${baseurl}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=99`,
};
export default requestmovieapi;
