import React from 'react';
import {shallow} from 'enzyme';
import {WatchVideo} from '../WatchVideo';

describe("WatchVideo", () => {
    test("renders", () => {
      const wrapper = shallow(<WatchVideo/>);
      expect(wrapper).toMatchSnapshot();
    });
  });