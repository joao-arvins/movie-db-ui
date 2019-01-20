import React from 'react';
import MovieItem from '../../../src/components/MovieItem.jsx';
import { mount } from 'enzyme';

describe('Movie Item Component', () => {
  let component;
  const movieItem = {
    id: 1,
    title: 'Dummy Title',
    release_date: '2019-01-20',
    poster_path: '/123456789.jpg',
    vote_average: 0,
  };

  beforeEach(() => {
    component = mount(<MovieItem key={movieItem.id} movie={movieItem}></MovieItem>);
  });

  it('Displays the movie title', () => {
    expect(component.text().includes(movieItem.title)).toBeTruthy();
  });
});