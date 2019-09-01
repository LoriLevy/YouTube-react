import React from 'react';
import {shallow} from 'enzyme';
import {Video} from '../Video';


describe('Video', () => {
    test('renders video component correctly', () => {
      const wrapper = shallow(
        <Video id='DqUQW3xyQ1c'/>
      );
      expect(wrapper).toMatchSnapshot();
    });
});
