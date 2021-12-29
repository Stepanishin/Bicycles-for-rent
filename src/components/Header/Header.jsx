import React from 'react';
import NavigationList from './NavigationList';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavigationList />
        </div>
    );
};

export default Header;