import React from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecundary from '../buttons/ButtonSecundary';



const Menu = () => {
    return (
        <div className="box-menu">
            
            <ButtonPrimary
                contenidobtn='+'
            />
            <div className="box-menu-dropdown">
                <ul>
                    <li>Acerca de mí</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="box-contacto-section not-visible">
                <p>Puedes contactarme aquí.</p>
                <ButtonSecundary
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