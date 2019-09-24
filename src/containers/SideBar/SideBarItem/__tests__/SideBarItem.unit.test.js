import React from 'react';
import { shallow } from 'enzyme';
import SideBarItem from '../SideBarItem';

describe('SideBarItem', () => {
    test('Renders an EMPTY SideBarItem', () => {
        const wrapper = shallow(
            <SideBarItem />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders highlighted SideBarItem', () => {
        const wrapper = shallow(
            <SideBarItem highlighted icon='fire' label='Trending' />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders SideBarItem that is not highlighted', () => {
        const wrapper = shallow(
            <SideBarItem icon='fire' label='Trending' />
        );
        expect(wrapper).toMatchSnapshot();
    });
});