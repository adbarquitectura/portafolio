import React from 'react';
import './Menu.css';
import ButtonPrimaryLink from '../buttons/ButtonPrimaryLink';

const ContactModule = (props) => {
    return (

        <div style={props.visible} className="box-contacto-section-not-visible">
            <p>Puedes contactarme aquí.</p>

            <ButtonPrimaryLink
                contenidobtn=' Escríbeme'
                anclaLinkTo='mailto:adnamadiaz@gmail.com'
            />
        </div>

    );
};

export default ContactModule; 
