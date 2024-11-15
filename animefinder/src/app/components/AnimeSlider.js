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

"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "../../styles/animeSlider.css"; // Slider styles

const AnimeSlider = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  useEffect(() => {
    // Fetch data from Jikan API (Top Anime)
    const fetchAnimeData = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setAnimeList(data.data); // Set the fetched data to state
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchAnimeData();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  if (loading) {
    return (
      <div className="loading-message">
        <div className="spinner"></div>
        <p>Loading anime...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="anime-slider">
      <h2>Top Anime Right Now</h2>
      {animeList.length > 0 ? (
        <Swiper
          spaceBetween={30} // Space between each slide
          slidesPerView={3} // Default number of slides per view
          loop={true} // Enable looping through slides
          pagination={{ clickable: true }} // Pagination configuration
          navigation={true} // Navigation configuration
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide per view on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides per view on medium screens
            },
            1024: {
              slidesPerView: 3, // 3 slides per view on larger screens
            },
          }}
        >
          {/* Dynamically render each anime from the animeList */}
          {animeList.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <div className="anime-item">
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title || "Anime image"}
                />
                <h3>{anime.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No anime available</p> // In case no anime data is returned
      )}
    </div>
  );
};

export default AnimeSlider;
