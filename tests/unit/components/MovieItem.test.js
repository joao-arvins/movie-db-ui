import React from 'react';
import MovieItem from '../../../src/components/MovieItem.jsx';
import { mount } from 'enzyme';

describe('Movie Item Component', () => {
  let component;
  const movieItem = {
    title: 'Dummy Title'
  };

  beforeEach(() => {
    component = mount(<MovieItem key={movieItem.title} movie={movieItem}>Facebook</MovieItem>);
  });

  it('Displays the movie title', () => {
    expect(component.text()).toEqual(movieItem.title);
  });
});