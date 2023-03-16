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
     opacity: 90,
    },
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal ariaHideApp={false}
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="movie-details">
        <img src={movie.Poster} alt={movie.Title} />
        <div >
          <h2>{movie.Title}</h2>
          <p>{movie.Type}</p>
          <div className="movie-info">
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>About:</strong> {movie.Plot}
            </p>
            {/* <p>
                {console.log(movie)}
              Rating:{" "}
              {movie.Ratings &&
                movie.Ratings.map((Rating) => (
                  <p>
                    {Rating.Source} : {Rating.Value} 
                  </p>
                ))}
            </p> */}
            <button className="btnCloseDetails" onClick={closeModal}>close</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
