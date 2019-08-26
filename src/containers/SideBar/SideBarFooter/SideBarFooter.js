import React from 'react';
import './SideBarFooter.scss'

export function SideBarFooter() {
    return (
        <React.Fragment>
            <div className='footer-block'>
                <div>About</div>
                <div>Creator</div>
                <div>Developers +ViewTube</div>
                <div>Legal</div>
            </div>
            <div className='footer-block'>
                <div>Terms Privacy</div>
                <div>Policy & Safety</div>
                <div>Test new features</div>
            </div>
            <div className='footer-block'>
                <div>All prices include VAT</div>
            </div>
            <div className='footer-block'>
                <div>© ViewTube.com - A Youtube clone for my own educational purposes under fair use.</div>
            </div>
        </React.Fragment>
    );
}