import React from "react";
import MovieDetails from "../MovieDetails/MovieDetails";
export default function MovieCard({
 
  movie,
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="movie" key={movie.imdbID} onClick={() => setIsOpen(true)}>
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
      <MovieDetails movie={movie} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
