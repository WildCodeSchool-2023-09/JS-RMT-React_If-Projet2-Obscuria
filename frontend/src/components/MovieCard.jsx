import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

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
