import React from 'react';
import MovieItem from './MovieItem.jsx';

const MoviesList = ({ list }) => (
    <div>
      {list.map((item) => (
        <MovieItem key={item.title} item={item} />
      ))}
    </div>
);

export default MoviesList;