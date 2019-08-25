import React from 'react';
import { shallow } from 'enzyme';
import { Subscription } from '../Subscription';

describe('Subscription', () => {
    test("Empty subscriptions renders", () => {
        const wrapper = shallow(
            <Subscription />
        );
        expect(wrapper).toMatchSnapshot();
    });
});