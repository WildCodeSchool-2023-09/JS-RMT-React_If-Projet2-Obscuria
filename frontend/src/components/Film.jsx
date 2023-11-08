import { useLoaderData } from "react-router-dom";
// import CarrouselMenu from "./Carrousel";

function Affiche() {
  const films = useLoaderData();

  return (
    <div>
      <div className="contener">
        {films.map((film) => {
          return (
            <div className="carte">
              <img
                className="borderimg"
                src={film.poster_path}
                alt={film.original_title}
              />
            </div>
          );
        })}
      </div>
      {/* <div>
        <CarrouselMenu films={films} />
      </div> */}
    </div>
  );
}

export default Affiche;
