import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App', () => {
  test('renders', () => {
    const wrapper = shallow(
      <App/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
