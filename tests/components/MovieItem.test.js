import React from 'react';
import MovieItem from '../../src/components/MovieItem.jsx';
import { shallow } from 'enzyme';

describe('Movie Item Component', () => {
  let component;
  const movieItem = {
    title: 'Dummy Title'
  };

  beforeEach(() => {
    component = shallow(<MovieItem key={movieItem.title} item={movieItem}>Facebook</MovieItem>);
  });

  it('Displays the movie title', () => {
    expect(component.text()).toEqual(movieItem.title);
  });
});