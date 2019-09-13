import React from 'react';
import {shallow} from 'enzyme';
import {AddComment} from '../AddComment';

describe('AddComment', () => {
    test('It renders correctly', () => {
        const wrapper = shallow(<AddComment/>);
        expect(wrapper).toMatchSnapshot();   
    });
});