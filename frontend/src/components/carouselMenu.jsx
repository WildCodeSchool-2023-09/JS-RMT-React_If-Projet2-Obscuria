import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const movieData = [
  {
    title: "The Marvels",
    summary:
      "Un phènomène étrange lie les pouvoirs de Captain Marvel, de Ms.Marvel et de Monica Rambeau. Elles vont devoir faire équipe pour affronter une grande menace.",
    imageSrc:
      "https://image.jeuxvideo.com/medias-md/169936/1699359391-8320-artwork.jpg",
    Casting: "Brie Larson, Iman Vellani, Teyonah Parris et Samuel L. Jackson",
    Date_Sortie: "Maintenant au cinéma",
  },
  {
    title: "Napoléon",
    summary:
      "L'histoire du célèbre empereur Napoléon, interprété par Joaquin Phoenix",
    imageSrc:
      "https://fr.web.img6.acsta.net/pictures/23/10/18/16/31/2876053.jpg",
    Casting: "Joaquin Phoenix, Vanessa Kirby, Tahar Rahim",
    Date_Sortie: "Prochainement au cinéma.",
  },
  {
    title: "Killers of the Flower Moon",
    summary:
      "Dans le comté d'Osage, où le pétrôle coule à flot, des membres d'un tribut amérindienne sont assassinés.",
    imageSrc:
      "https://culture.saintmartindheres.fr/culture_sitep/wp-content/uploads/2023/10/affiche_killer-of-the-flower-moon.webp",
    Casting: "Robert De Niro, Leonardo Dicaprio, Lily Gladstone",
    Date_Sortie: "Toujours au cinéma",
  },
];

const carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
        arrows={settings.arrows}
      >
        {movieData.map((movie, index) => (
          <div key={index.id} className="carousel-slide">
            <img src={movie.imageSrc} alt={movie.title} />
            <div className="overlay">
              <h3>{movie.title}</h3>
              <p>{movie.summary}</p>
              <p>Casting: {movie.Casting}</p>
              <p>{movie.Date_Sortie}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default carousel;
