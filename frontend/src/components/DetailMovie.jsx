import { Link, useLoaderData } from "react-router-dom";
import "./MovieCard.css";
import "./DetailMovie.css";

function DetailMovie() {
  const movie = useLoaderData();
  return (
    <Link className="link" to="/">
      <figure className="cardDetailContainer">
        <div className="cartDetailTitel">
          <div className="cardDetailTitlelft">
            <p className="cardDetail_h1">{movie.original_title}</p>
            <p>{movie.genre_ids}</p>
          </div>
        </div>
        <div className="containerHour">
          <div className="cardDetailcontainerimg">
            <img
              className="cardDetailImg"
              src={movie.poster_path}
              alt={movie.original_title}
            />
          </div>

          <div className="containerHourRight">
            <div className="cardDetailDayContainer">
              <span className="cardDetailDay">jeudi 16 novembre</span>
            </div>
            <div className="firsthour">
              <div className="cardDetailhour">10h </div>
              <div className="cardDetailhour">14h </div>
            </div>
            <div className="secondHour">
              <div className="cardDetailhour">16h </div>
              <div className="cardDetailhour">19h </div>
            </div>
            <div className="thirdHour">
              <div className="cardDetailhour">21h30 </div>
            </div>
            <div className="cardDetailAbout">
              <p className="CardDetailLanguage">{movie.original_language}</p>
              <span className="cardDetailvote">{movie.vote_average}</span>
            </div>
          </div>
        </div>
        <figcaption className="cardDetailover">{movie.overview}</figcaption>
      </figure>
    </Link>
  );
}

export default DetailMovie;
