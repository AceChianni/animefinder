// "use client";
// // src/components/AnimeSlider.js
// import React from "react";

// const AnimeSlider = () => (
//   <section className="content">
//     <h2 className="anime-heading">Hottest Anime of the Season</h2>
//     <div className="anime-slider">
//       <div className="slide">
//         <img
//           src="https://via.placeholder.com/400x600/66ccff/333333?text=Anime+1"
//           alt="Anime 1"
//         />
//       </div>
//       <div className="slide">
//         <img
//           src="https://via.placeholder.com/400x600/ff66a3/333333?text=Anime+2"
//           alt="Anime 2"
//         />
//       </div>
//       <div className="slide">
//         <img
//           src="https://via.placeholder.com/400x600/66ccff/333333?text=Anime+3"
//           alt="Anime 3"
//         />
//       </div>
//     </div>
//   </section>
// );

// export default AnimeSlider;
//

// src/app/components/AnimeSlider.js

"use client"; // Needed for components with interactivity
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Swiper navigation styles
import { Navigation } from "swiper";

const AnimeSlider = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    // Fetch top anime from the Jikan API
    const fetchTopAnime = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await response.json();
        setAnimeList(data.data); // Update state with the anime list
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchTopAnime();
  }, []);

  return (
    <div className="anime-slider">
      <h2>Top Anime Right Now</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
      >
        {animeList.map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <div className="anime-item">
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              <h3>{anime.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimeSlider;
