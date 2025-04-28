import React from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const movie = {
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  };

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie