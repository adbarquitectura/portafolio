import React from 'react';
import TitleAbout from '../components/headers/TitleAbout';
import './AboutView.css';
import photo from '../assets/images/foto.jpg';
import nexticon2 from '../assets/icons/nexticon2.png';

const AboutView = () => {
    return (
        <div className="box-about">
            <TitleAbout />

            <div className="box-tag">
                <a
                    href='#habilidades'
                    rel='noopener noreferrer'
                >Habilidades
            </a>
                <a
                    href='#intereses'
                    rel='noopener noreferrer'
                >Intereses
            </a>
            </div>

            <div className="box-img-about">
                <img src={photo} alt='photo' />
            </div>
            <img src={nexticon2} alt='photo' />

        </div>
    )
}

export default AboutView;