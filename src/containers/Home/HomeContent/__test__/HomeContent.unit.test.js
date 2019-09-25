/* file: src/containers/Home/HomeContent/__test__/HomeContent.unit.test.js */
import React from 'react';
import { shallow } from 'enzyme';
import HomeContent from '../HomeContent';

describe('HomeContent', () => {
    test('it renders', () => {
      const wrapper = shallow(<HomeContent />);
      expect(wrapper).toMatchSnapshot();
    });
  });