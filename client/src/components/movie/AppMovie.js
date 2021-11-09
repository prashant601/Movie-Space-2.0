import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./AppMovie.css";


const FEATURED_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=114fc53f0f4a77fc9c36b19064555e44&language=en-US&page=1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=114fc53f0f4a77fc9c36b19064555e44&query=";

function AppMovie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      getMovies(`${SEARCH_API}${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <>
      <header className="movieBody">
        <form className="form" onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search movies..."
            value={searchTerm} 
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default AppMovie;
