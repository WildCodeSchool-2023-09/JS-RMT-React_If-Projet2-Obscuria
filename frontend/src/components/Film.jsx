import { useLoaderData } from "react-router-dom";

function Affiche() {
  const films = useLoaderData();

  return (
    <div className="container">
      {films.map((film) => {
        return (
          <div className="card" key={film.id}>
            <img
              className="borderimg"
              src={film.poster_path}
              alt={film.original_title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Affiche;
