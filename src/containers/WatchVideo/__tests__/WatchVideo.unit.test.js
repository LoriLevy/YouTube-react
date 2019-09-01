import React from 'react';
import {shallow} from 'enzyme';
import {WatchVideo} from '../WatchVideo';

describe("WatchVideo", () => {
    test("it renders", () => {
      const wrapper = shallow(<WatchVideo />);
      expect(wrapper).toMatchSnapshot();
    });
  });