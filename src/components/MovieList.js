import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onDetailsClick }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onDetailsClick={onDetailsClick} />
        ))
      ) : (
        <p>No movies found. Try another search.</p>
      )}
    </div>
  );
};

export default MovieList;
