// src/components/AnimeSlider.js
import React from "react";

const AnimeSlider = () => (
  <section className="content">
    <h2 className="anime-heading">Hottest Anime of the Season</h2>
    <div className="anime-slider">
      <div className="slide">
        <img
          src="https://via.placeholder.com/400x600/66ccff/333333?text=Anime+1"
          alt="Anime 1"
        />
      </div>
      <div className="slide">
        <img
          src="https://via.placeholder.com/400x600/ff66a3/333333?text=Anime+2"
          alt="Anime 2"
        />
      </div>
      <div className="slide">
        <img
          src="https://via.placeholder.com/400x600/66ccff/333333?text=Anime+3"
          alt="Anime 3"
        />
      </div>
    </div>
  </section>
);

export default AnimeSlider;
