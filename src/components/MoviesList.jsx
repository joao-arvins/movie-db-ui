import React from 'react';
import MovieItem from './MovieItem.jsx';

const MoviesList = ({ list }) => (
    <ul>
      {list.map((item) => (
        <MovieItem key={item.title} item={item} />
      ))}
    </ul>
);

export default MoviesList;