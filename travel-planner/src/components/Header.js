import React from 'react';
import spacex_logo  from '../assets/images/spacex_logo.svg';

import { LogoutOutlined } from '@ant-design/icons';

function Header(props) {
    const { isLoggedIn, handleLogout } = props;
    return (
        <header className="App-header">
            <img src={spacex_logo} className="App-logo" alt="logo" />
            <p className="title">
                Travel
            </p>
            <img src={spacex_logo} alt="logo" className="App-logo2"/>
            {
                !isLoggedIn ?
                    <LogoutOutlined className='logout' onClick={handleLogout}/>
                    :
                    null
            }
        </header>
    );
}


export default Header;
