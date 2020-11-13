import React from 'react';
import './Menu.css';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecundary from '../buttons/ButtonSecundary';
import ButtonCircle from '../buttons/ButtonCircle';
import whatsapp from '../../assets/icons/whatsapp.png';

const Menu = () => {
    return (
        <div className="box-menu">

            <div className="box-menu-button">
                <ButtonCircle
                    contenidobtn='+'
                />
            </div>


            <div className="box-menu-dropdown">
                <ul>
                    <li>Acerca de mí</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="box-contacto-section-not-visible">
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