import React from "react";
import { shallow } from "enzyme";
import VideoGrid from "../VideoGrid";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {  Provider  } from 'react-redux';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  example: {}
};
const store = mockStore(initialState);

describe("VideoGrid", () => {
  test("renders without props", () => {
    const wrapper = shallow(<Provider store={store}><VideoGrid /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with a title prop", () => {
    const wrapper = shallow(<Provider store={store}><VideoGrid title="Trending" /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders without a divider", () => {
    const wrapper = shallow(<Provider store={store}><VideoGrid hideDivider={true} /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
