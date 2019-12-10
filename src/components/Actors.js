import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
<h1>Actors Page</h1>
      {actors.map(actor => {
        return<div key={actor.id}>
          {actor.name}
          <ul>
          {actor.movies.map(movie => <li key={movie.id}>{movie}</li>)}
          </ul>
          </div>})
      }    </div>
  );
};

export default Actors;
