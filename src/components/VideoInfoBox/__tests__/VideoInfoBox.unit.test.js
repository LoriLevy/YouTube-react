import VideoInfoBox from '../VideoInfoBox';
import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {  Provider  } from 'react-redux';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  example: {}
};
const store = mockStore(initialState);

describe('renders', () => {
    test('renders', () => {
        const wrapper = shallow(<Provider store={store}><VideoInfoBox /></Provider>);
        expect(wrapper).toMatchSnapshot();
    });
});


/*      // test('renders collapsed', () => {
    // const wrapper = shallow(<VideoInfoBox/>);
    // expect(wrapper).toMatchSnapshot();
    // });

    // test('renders expanded', () => {
    //     const wrapper = shallow(<VideoInfoBox/>);
        
    //     wrapper.setState({collapsed: false});
    //     expect(wrapper).toMatchSnapshot();
    //     });
    
    
    */