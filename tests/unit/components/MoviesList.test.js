import React from 'react';
import MoviesList from '../../../src/components/MoviesList.jsx';
import { mount } from 'enzyme';

describe('Movies List Component', () => {
  let component;

  const moviesList = [
    {
      id: 1,
      title: 'A',
      release_date: '2019-01-20',
      poster_path: '/123456789.jpg',
      vote_average: 0,
    },
    {
      id: 2,
      title: 'B',
      release_date: '2019-01-20',
      poster_path: '/123456789.jpg',
      vote_average: 0,
    }
  ];

  beforeEach(() => {
    component = mount(<MoviesList list={moviesList} />);
  });

  it('Renders one movie item component per item', () => {
    expect(component.find('MovieItem').length).toEqual(2);
  });
});