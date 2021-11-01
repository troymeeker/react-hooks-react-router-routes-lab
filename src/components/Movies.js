import React from "react";
import { movies } from "../data";

function Movies() {

const movieInfo = movies.map((movie) => 
  <div key={movie.title}>
    <h2> Movie: {movie.title} </h2>
    <h3> Length: {movie.time} minutes </h3>
    <ul>
      {movie.genres.map((genre) => 
        <li key={genre}>{genre}</li>
      )}
    </ul>
  
  </div>
)

  return <div>
    <h1>Movies Page</h1>
     {movieInfo}
    </div>;
}

export default Movies;
