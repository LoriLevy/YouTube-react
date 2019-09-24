import React from 'react';
import Video from '../Video';
import {shallow} from 'enzyme';

describe('Video', () => {
    test('renders video component correctly', () => {
      const wrapper = shallow(
        <Video id='DqUQW3xyQ1c'/>
      );
      expect(wrapper).toMatchSnapshot();
    });

    test('renders null if no id in video component', ()=>{
      const wrapper = shallow( <Video/>);
      expect(wrapper).toMatchSnapshot();
    });
});
