import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

const MovieList=({movies})=> {
  return (
    <div className='movie-list'>
        {movies.length>=0 ? (movies.map((movie)=>(<MovieCard key={movie.imdbID} movie={movie}/>
        ))
    ):(
    <p> No Movies To Display</p>
)}
        
    </div>
  );
};

export default MovieList;