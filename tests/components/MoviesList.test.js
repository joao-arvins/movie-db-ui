import React from 'react';
import MoviesList from '../../src/components/MoviesList.jsx';
import { shallow } from 'enzyme';

describe('Movies List Component', () => {
  let component;

  const moviesList = [
    { title : 'A' },
    { title : 'B' }
  ];

  beforeEach(() => {
    component = shallow(<MoviesList list={moviesList} />);
  });

  it('Renders one movie item component per item', () => {
    expect(component.find('MovieItem').length).toEqual(2);
  });
});