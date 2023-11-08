import "./App.css";
import { useLoaderData } from "react-router-dom";

function App() {
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
    </div>
  );
}

export default App;
