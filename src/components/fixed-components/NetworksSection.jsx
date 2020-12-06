import React from 'react';
import './NetworksSection.css';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

const NetworksSection = () => {
    return (
        <div className="btnLateral-networks">           
            <a
                href='https://linkedin.com/in/adbarquitectura'
                target='_blank'
                rel='noopener noreferrer'
            >
                <img src={linkedin} alt='Linkedin' />
            </a>

            <a
                href='https://github.com/adbarquitectura'
                target='_blank'
                rel='noopener noreferrer'
            >
                <img src={github} alt='GitHub' />
            </a>
        </div>

    );
};

export default NetworksSection;