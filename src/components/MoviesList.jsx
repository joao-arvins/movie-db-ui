import React from 'react';
import MovieItem from './MovieItem.jsx';

const MoviesList = ({ list }) => (
    <div>
      {list.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </div>
);

export default MoviesList;