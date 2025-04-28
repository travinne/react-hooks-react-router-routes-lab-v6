import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const directors = [
    {
      name: "Scott Derrickson",
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
    },
    {
      name: "Mike Mitchell",
      movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
    },
    {
      name: "Edward Zwick",
      movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
    },
  ];

  return (
    <>
      <header>
        <h1>Directors Page</h1>
        <NavBar/>
      </header>
      <main>
      <ul>
        {directors.map((director) => (
          <li key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      </main>
    </>
  );
};

export default Directors;
