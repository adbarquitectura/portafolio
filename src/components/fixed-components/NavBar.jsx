import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {

    const [scrolled, setScrolled] = React.useState('');
    
    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 0 ? setScrolled('box-menu-desktop-scroll') : setScrolled('');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (

        <div className={`box-menu-desktop ${scrolled}`} >
            <a href="#proyectos">Proyectos</a>
            <a href="#acerca">Acerca de mí</a>
            <a href="#intereses">Contancto</a>
        </div>

    );
};

export default NavBar;