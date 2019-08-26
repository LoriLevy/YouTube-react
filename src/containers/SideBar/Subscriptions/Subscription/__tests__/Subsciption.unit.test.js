import React from 'react';
import { shallow } from 'enzyme';
import { Subscription } from '../Subscription';

describe('Subscription', () => {
    test("Empty subscription renders", () => {
        const wrapper = shallow(
            <Subscription />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test("broadcasting Subscription renders ", () => {
        const wrapper = shallow(
            <Subscription broadcasting label="Loritest" />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test("non-broadcasting Subscription with new videos renders ", () => {
        const wrapper = shallow(
            <Subscription amountNewVideos={3} label="Loritest" />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
