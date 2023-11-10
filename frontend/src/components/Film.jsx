import { useLoaderData } from "react-router-dom";

function Affiche() {
  const films = useLoaderData();

  return (
    <div>
      <div className="contener">
        {films.map((film) => {
          return (
            <div className="carte" key={film.id}>
              <img
                className="borderimg"
                src={film.poster_path}
                alt={film.original_title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Affiche;
