import React from "react";
import Modal from "react-modal";

export default function MovieDetails({
  movie,
  isOpen,
  setIsOpen,
 
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="movie-details">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-details">
          <h2>{movie.Title}</h2>
          <p>{movie.Description}</p>
          <div className="movie-info">
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
                {console.log(movie)}
              Rating:{" "}
              {movie.Ratings &&
                movie.Ratings.map((Rating) => (
                  <p>
                    {Rating.Source} : {Rating.Value}
                  </p>
                ))}
            </p>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
