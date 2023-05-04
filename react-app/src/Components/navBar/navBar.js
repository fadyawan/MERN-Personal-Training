import React from 'react';
import './navBar.css';
import Button from '../button/Button';
import logo from '../../logo.svg';
import logoMobile from '../../logoMobile.svg';
import { Toolbar, Typography } from '@material-ui/core';

function NavBar() {
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className="bar">
            <img src={logo} className="logo" alt="something"/>
            <img src={logoMobile} className="logoMobile" alt="something"/>
            <Typography variant="h6" className="menuItem">
                About
            </Typography>
            <Typography variant="h6" className="menuItem">
                Blog
            </Typography>
            <Typography variant="h6" className="menuItem">
                Careers
            </Typography>
            <Typography variant="h6" className="menuItem">
                Demos
            </Typography>
            <Typography variant="h6" className="menuItem">
                Contact Us
            </Typography>
            <Button txt="Trial Our Product" />
        </Toolbar>
    )
}

export default NavBar
