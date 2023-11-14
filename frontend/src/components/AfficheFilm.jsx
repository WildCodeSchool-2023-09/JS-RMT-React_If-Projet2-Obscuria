import React from "react";
import { useLoaderData } from "react-router-dom";
import FilmCard from "./FilmCard";

function AfficheFilm() {
  const films = useLoaderData();
  return (
    <div className="container">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default AfficheFilm;
