import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const movies = [
    { id: 1, title: "Doctor Strange" },
    { id: 2, title: "Iron Man" },
    { id: 3, title: "Captain America: The First Avenger" },
  ];

  return (
    <div>
      <NavBar/>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;