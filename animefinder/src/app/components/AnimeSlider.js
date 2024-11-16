"use client";

// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../../styles/animeSlider.css";

// const AnimeSlider = () => {
//   const [animeList, setAnimeList] = useState([]);
//   const [swiper, setSwiper] = useState(null);

//   useEffect(() => {
//     // Fetch data from Jikan API (Top Anime)
//     const fetchAnimeData = async () => {
//       const response = await fetch("https://api.jikan.moe/v4/top/anime");
//       const data = await response.json();
//       setAnimeList(data.data); // Set the fetched data to state
//     };

//     fetchAnimeData();
//   }, []);

//   return (
//     <div className="anime-slider">
//       <h2>Top Anime Right Now</h2>
//       {animeList.length > 0 ? (
//         <Swiper
//           spaceBetween={30} // Space between each slide
//           slidesPerView={1} // Only 1 slide per view (no matter the device)
//           loop={true} // Enable looping through slides
//           pagination={{ clickable: true }}
//           navigation={false} // Disable default Swiper navigation
//           autoplay={{
//             delay: 3000, // Adjust auto-slide delay
//             disableOnInteraction: false, // Keep autoplay active even when manually interacting
//           }}
//           onSwiper={setSwiper} // Store swiper instance
//         >
//           {animeList.map((anime) => (
//             <SwiperSlide key={anime.mal_id}>
//               <div className="anime-item">
//                 <img
//                   src={anime.images.jpg.large_image_url}
//                   alt={anime.title}
//                   className="anime-image"
//                 />
//                 <h3>{anime.title}</h3>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p>Loading...</p>
//       )}

//       {/* Custom Navigation Buttons */}
//       <div className="custom-nav">
//         <button onClick={() => swiper?.slidePrev()}>Prev</button>
//         <button onClick={() => swiper?.autoplay.stop()}>Pause</button>
//         <button onClick={() => swiper?.autoplay.start()}>Play</button>
//         <button onClick={() => swiper?.slideNext()}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default AnimeSlider;

// src/components/AnimeSlider.js

// src/components/AnimeSlider.js

import { useState, useEffect } from "react";

const AnimeSlider = () => {
  const [animeData, setAnimeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch anime data from the Jikan API (Top anime from MyAnimeList)
    const fetchAnimeData = async () => {
      const response = await fetch("https://api.jikan.moe/v4/top/anime");
      const data = await response.json();
      setAnimeData(data.data);
    };

    fetchAnimeData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % animeData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + animeData.length) % animeData.length
    );
  };

  return (
    <div className="anime-slider">
      {animeData.length > 0 ? (
        <>
          <div className="anime-item">
            <img
              src={animeData[currentIndex].images.jpg.large_image_url}
              alt={animeData[currentIndex].title}
            />
            <h3>{animeData[currentIndex].title}</h3>
          </div>

          <div className="custom-nav">
            <button onClick={prevSlide}>&lt; Prev</button>
            <button onClick={nextSlide}>Next &gt;</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnimeSlider;
