import React from 'react';
import './EstilosBotones.css';


const ButtonPrimaryLink = (props) => {
    return (
        <button
            className="btnSecundary"
        >
            <img src={props.imgsrc} alt='' />
            <a
                href={props.anclaLinkTo}
                target='_blank'
                rel='noopener noreferrer'
                >{props.contenidobtn}
            </a>            
        </button>
    );
};
export default ButtonPrimaryLink;