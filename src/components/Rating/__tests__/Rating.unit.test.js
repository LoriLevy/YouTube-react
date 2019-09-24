import React from 'react';
import {shallow} from 'enzyme';
import Rating from '../Rating';

describe('No props, so see if Rating', () => {
    test('renders', () => {
        const wrapper = shallow(<Rating />);
        expect(wrapper).toMatchSnapshot();
    });
});
