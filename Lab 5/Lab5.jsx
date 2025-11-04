import React, { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  function addMovie() {
    if (name && rating) {
      const newMovie = { name: name, rating: rating, comment: comment };
      setMovies([...movies, newMovie]);
      setName("");
      setRating("");
      setComment("");
    }
  }

  function removeMovie(index) {
    const updatedList = movies.filter((_, i) => i !== index);
    setMovies(updatedList);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>My Movies Watch List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Movie name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Stars (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {movies.map((movie, index) => (
          <li
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <strong>{movie.name}</strong> <br />
            Rating: {"⭐".repeat(movie.rating)} <br />
            Comment: {movie.comment || "No comment"} <br />
            <button onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
