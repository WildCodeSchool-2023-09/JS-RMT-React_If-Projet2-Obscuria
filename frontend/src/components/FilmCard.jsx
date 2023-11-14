import React from "react";
import "./FilmCard.css";

function FilmCard({ film }) {
  return (
    <div className="card" key={film.id}>
      <img
        className="borderimg"
        src={film.poster_path}
        alt={film.original_title}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default FilmCard;
