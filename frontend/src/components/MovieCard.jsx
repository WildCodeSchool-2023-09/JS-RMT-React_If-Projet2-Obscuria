import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ film }) {
  return (
    <Link className="card" to={`/films/${film.id}`}>
      <img
        className="borderimg"
        src={film.poster_path}
        alt={film.original_title}
        style={{ cursor: "pointer" }}
      />
    </Link>
  );
}

export default MovieCard;
