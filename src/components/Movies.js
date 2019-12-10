import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(movie => { 
            return <div key={movie.id}>
              {movie.title}
              {movie.time}
              <ul>
                {movie.genres.map(genre => <li key={genre.id}>{genre}</li>)}
              </ul>
              </div>
        })}
    </div>
  );
};

export default Movies;
