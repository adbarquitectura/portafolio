import React, { useState } from 'react';
import './Menu.css';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecundary from '../buttons/ButtonSecundary';
import ButtonCircle from '../buttons/ButtonCircle';
import whatsapp from '../../assets/icons/whatsapp.png';
import ButtonText from '../buttons/ButtonText';

const Menu = () => {
    const [textButtonCircle, setTextButtonCircle] = useState('+')
    const [colorMenu, setColorMenu] = useState({ backgroundColor: '#021130' })
    const [showMenu, setShowMenu,] = useState({ display: 'none' })
    const [showContact, setShowContact,] = useState({ display: 'none' })

    const showMenuList = () => {
        setColorMenu({ backgroundColor: 'red' });
        //setColorMenu({backgroundColor: '#003D5D'});
        setTextButtonCircle('-');
        setShowMenu({ display: 'block' });
    };

    const showMenuContact = () => {
        setShowContact({ display: 'block' });
    }

    return (
        <div style={colorMenu} className="box-menu">

            <div style={colorMenu} className="box-menu-button">
                <ButtonCircle
                    contenidobtn={textButtonCircle}
                    funcion={showMenuList}
                />
            </div>

            <div style={showMenu} className="box-menu-dropdown">
                <ul>
                    <li>Acerca de mí</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
                
            </div>
            <div style={showContact} className="box-contacto-section-not-visible">
                <p>Puedes contactarme aquí.</p>
                <ButtonSecundary
                    imgsrc={whatsapp}
                    contenidobtn=' +56 9 52411777'
                />
                <ButtonPrimary
                    contenidobtn=' Escríbeme'
                />
            </div>
        </div>
    );
};

export default Menu;