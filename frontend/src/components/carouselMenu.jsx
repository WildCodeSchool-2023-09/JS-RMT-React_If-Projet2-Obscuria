import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselMenu() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/films?limit=3`)
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider
        dots={carouselSettings.dots}
        infinite={carouselSettings.infinite}
        speed={carouselSettings.speed}
        slidesToShow={carouselSettings.slidesToShow}
        slidesToScroll={carouselSettings.slidesToScroll}
        autoplay={carouselSettings.autoplay}
        arrows={carouselSettings.arrows}
        arrowSize={carouselSettings.arrowSize}
      >
        {films.map((film) => (
          <div key={film.id} className="menu-carousel">
            <img
              className="images-left-slide"
              src={film.poster_path}
              alt={film.original_title}
            />
            <div className="text-right-slide">
              <p className="film-original-title">{film.original_title}</p>
              <p className="film-description">{film.overview}</p>
              <button type="button" className="button-ticket">
                Réservez votre billet !
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselMenu;
