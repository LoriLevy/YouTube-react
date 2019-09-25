/* file: src/components/AppLayout/AppLayout.js */
import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';

function AppLayout(props) {
  return (
    <div className='app-layout'>
      <HeaderNav />
      {props.children}
    </div>
  );
}
export default AppLayout;
