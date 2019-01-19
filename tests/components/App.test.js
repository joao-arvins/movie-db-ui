import React from 'react';
import App from '../../src/components/App.jsx';
import { shallow } from 'enzyme';

describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App/>);
  });
  
  it('Renders one SearchBox element', () => {
    expect(component.find('SearchBox').length).toEqual(1);
  });

  it('Renders one MoviesList element', () => {
    expect(component.find('MoviesList').length).toEqual(1);
  });
});