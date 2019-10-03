import React from 'react';
import { shallow } from 'enzyme';
import VideoPreview from '../VideoPreview';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {  Provider  } from 'react-redux';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  example: {}
};
const store = mockStore(initialState);

describe(VideoPreview, () => {
  test('it renders vertically', () => {
    const wrapper = shallow(<Provider store={store}><VideoPreview/></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
  test('it renders horizontally', () => {
    const wrapper = shallow(<Provider store={store}><VideoPreview horizontal={true}/></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
