import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {

    const [scrolled, setScrolled] = React.useState('');

    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 0 ? setScrolled('box-navBar-scroll') : setScrolled('');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (

        <nav className={`box-navBar ${scrolled}`}>
            <ul className="box-menu-desktop" >
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#acerca">Acerca de mí</a></li>
                <li><a href="#contanto">Contacto</a></li>
            </ul>
        </nav>

    );
};

export default NavBar;