import React from 'react';
import Button from '@mui/material/Button';
import './navBar.css';

function NavBar() {
    return (
        <div className='navBarButtons'>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>React</Button>
            <Button>Express</Button>
        </div>
    )
}

export default NavBar;