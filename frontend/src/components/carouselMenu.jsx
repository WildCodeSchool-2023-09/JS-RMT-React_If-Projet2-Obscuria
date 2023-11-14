import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselMenu() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/film/limit`)
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, []);
  console.log(films);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <h2>Menu</h2>
      <Slider
        dots={carouselSettings.dots}
        infinite={carouselSettings.infinite}
        speed={carouselSettings.speed}
        slidesToShow={carouselSettings.slidesToShow}
        slidesToScroll={carouselSettings.slidesToScroll}
      >
        {films.map((film) => (
          <div key={film.id} className="menuCarousel">
            <img src={film.poster_path} alt={film.original_title} />
            <p className="filmName">{film.original_title}</p>
            <p className="synopsis">{film.overview}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselMenu;
