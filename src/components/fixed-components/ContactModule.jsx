import React from 'react';
import './Menu.css';
import ButtonPrimary from '../buttons/ButtonPrimary';

const ContactModule = (props) => {
    return (

        <div  style={props.visible}className="box-contacto-section-not-visible">
            <p>Puedes contactarme aquí.</p>
           
            <ButtonPrimary
                contenidobtn=' Escríbeme'
            />
        </div>

    );
};

export default ContactModule; 