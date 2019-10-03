import VideoInfoBox from '../VideoInfoBox';
import { shallow } from 'enzyme';
import React from 'react';



describe('renders', () => {
    test('renders', () => {
        const wrapper = shallow(<VideoInfoBox />);
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