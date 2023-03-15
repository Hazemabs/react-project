import React from "react";

export default function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <img src={movie.img} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release year: {movie.year}</p>
      <p>Director: {movie.director}</p>
      <p>Stars: {movie.stars.join(", ")}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}
