// src/app/page.js

import AnimeSlider from "./components/AnimeSlider";
import Poll from "./components/Poll";

const HomePage = () => (
  <div className="home-page">
    <h1>Annii's Anime Finder!</h1>
    <AnimeSlider />
    <Poll />
  </div>
);

export default HomePage;
