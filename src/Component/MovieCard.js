import React from "react";
import '../App.css';

const MovieCard =({movie})=>{
    return(
        <div className="movie-card">
            <h3>{movie.Title}</h3>
            <p>{movie.imdbID}</p>
            <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
      />

        </div>
    );
};

export default MovieCard;