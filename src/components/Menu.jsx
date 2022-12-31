import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Menu.scss';

const Menu = () => {
    const linkStyle = {
        margin: '20px',
        textDecoration: 'none',
        color: 'black',
    };

    return (
        <div className='menu'>
            <Link to='/' style={linkStyle}>
                Playlist
            </Link>
            <Link to='/music' style={linkStyle}>
                AddMusic
            </Link>
        </div>
    );
};

export default Menu;
