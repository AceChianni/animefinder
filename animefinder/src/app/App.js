import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Sidebar from "./components/Sidebar";
import AnimeSlider from "./components/AnimeSlider";
import Poll from "./components/Poll";
import "./styles/global.css";

const App = () => (
  <div className="App">
    <Navbar />
    <Title />
    <main className="main-content container mx-auto p-4">
      {" "}
      {/* Tailwind for layout spacing */}
      <Sidebar />
      <AnimeSlider />
      <Poll />
    </main>
  </div>
);

export default App;
