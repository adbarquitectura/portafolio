import React from 'react';
import './Menu.css';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecundary from '../buttons/ButtonSecundary';
import whatsapp from '../../assets/icons/whatsapp.png';


const ContactModule = () => {
    return (

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

    );
};

export default ContactModule;