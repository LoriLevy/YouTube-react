import React from 'react';
import {VideoMetadata} from '../VideoMetadata';
import {shallow} from 'enzyme';

describe('VideoMetadata', ()=> {
    test('Renders without props', () => {
        const wrapper = shallow(<VideoMetadata/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('Renders with view count', () => {
        const wrapper = shallow(<VideoMetadata viewCount={199234}/>)
        expect(wrapper).toMatchSnapshot();
    });
});