import React from 'react';
import SearchBox from '../../src/components/SearchBox.jsx';
import { shallow } from 'enzyme';

describe('SearchBox Component', () => {
  let component, onChangeSearchText;

  beforeEach(() => {
    onChangeSearchText = jest.fn();
    component = shallow(<SearchBox value={''} onChangeSearchText={onChangeSearchText}/>);
  });

  it('Renders one input element', () => {
    expect(component.find('input').length).toEqual(1);
  });

  describe('When the value of the inner input text changes', () => {
    let event;

    beforeEach(() => {
      event = { 
        target: { 
          value: 'A' 
        } 
      };
      
      component.find('input').simulate('change', event);
    });

    it('The onChangeSearchText function is called', () => {
      expect(onChangeSearchText).toHaveBeenCalledWith(event);
    });
  });
});