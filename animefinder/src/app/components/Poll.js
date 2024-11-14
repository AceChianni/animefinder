// src/components/Poll.js
"use client";

import React, { useState } from "react";

const Poll = () => {
  const [pollResults, setPollResults] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPollResults("Thank you for voting!");
  };

  return (
    <aside className="poll">
      <h2>Best Starting Anime Poll</h2>
      <form id="animePoll" onSubmit={handleSubmit}>
        {[
          "Pokemon",
          "One Piece",
          "Jujutsu Kaisen",
          "Bleach",
          "Naruto",
          "Demon Slayer",
        ].map((anime) => (
          <label key={anime}>
            <input type="radio" name="anime" value={anime.toLowerCase()} />{" "}
            {anime}
          </label>
        ))}
        <label className="inline-label">
          <input type="radio" name="anime" value="other" /> Other:
          <input
            type="text"
            name="otherText"
            className="small-text"
            placeholder="Type other anime"
          />
        </label>
        <button type="submit" className="heart-button">
          ❤
        </button>
      </form>
      <div className="poll-results">{pollResults}</div>
    </aside>
  );
};

export default Poll;
