import React from 'react';
import MovieCard from './MovieCard';


//here where we put all the movie cards
const MovieList = ({ movies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
     {/*map loop helps to go through each movie and show them*/}
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
