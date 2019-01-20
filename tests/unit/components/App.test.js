import React from 'react';
import App from '../../../src/components/App.jsx';
import moviesService from '../../../src/services/moviesService';
import { mount } from 'enzyme';

describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = mount(<App/>);
  });
  
  it('Renders one SearchBox element', () => {
    expect(component.find('InputBase').length).toEqual(1);
  });

  it('Renders one MoviesList element', () => {
    expect(component.find('MoviesList').length).toEqual(1);
  });

  describe('When the searchbox text changes', () => {
    let getMoviesByTitleSpy;

    beforeEach(() => {
      getMoviesByTitleSpy = spyOn(moviesService, 'getMoviesByTitle').and.returnValue({
        results: []
      });
    });

    describe('And the new value is an empty string', () => {
      beforeEach(() => {
        component.find('InputBase').prop('onChange')({ target : { value : '' }  });
      });
  
      it('No request to search for movies is made', () => {
        expect(getMoviesByTitleSpy).not.toHaveBeenCalled();
      });
    });

    describe('And the new value is an NOT empty string', () => {
      beforeEach(() => {
        component.find('InputBase').prop('onChange')({ target : { value : 'test' }  });
      });
  
      it('A request to search for movies is made using the inputted value', () => {
        expect(getMoviesByTitleSpy).toHaveBeenCalledWith('test');
      });
    });
  });
});