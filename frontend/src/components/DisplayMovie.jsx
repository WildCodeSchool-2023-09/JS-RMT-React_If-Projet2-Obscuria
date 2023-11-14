import React from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

function DisplayMovie() {
  const films = useLoaderData();
  return (
    <div className="container">
      {films.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default DisplayMovie;
