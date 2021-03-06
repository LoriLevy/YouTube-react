import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Watch from '../Watch';
import thunk from 'redux-thunk';
import {  Provider  } from 'react-redux';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  example: {}
};
const store = mockStore(initialState);

describe('Watch', () => {
    test('renders', () => {
      const wrapper = shallow(<Provider store={store}><Watch /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });
  }); 
  