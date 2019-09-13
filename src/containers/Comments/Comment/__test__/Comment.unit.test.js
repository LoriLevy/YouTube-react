import React from 'react';
import {shallow} from 'enzyme';
import {Comment} from '../Comment';

describe('Comment', () => {
    test('It renders correctly', () => {
        const wrapper = shallow(<AComment/>);
        expect(wrapper).toMatchSnapshot();   
    });
});