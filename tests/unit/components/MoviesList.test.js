import React from 'react';
import MoviesList from '../../../src/components/MoviesList.jsx';
import { mount } from 'enzyme';

describe('Movies List Component', () => {
  let component;

  const moviesList = [
    { id: 1, title : 'A' },
    { id: 2, title : 'B' }
  ];

  beforeEach(() => {
    component = mount(<MoviesList list={moviesList} />);
  });

  it('Renders one movie item component per item', () => {
    expect(component.find('MovieItem').length).toEqual(2);
  });
});