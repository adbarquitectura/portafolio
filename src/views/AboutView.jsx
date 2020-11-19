import React from 'react';
import TitleAbout from '../components/headers/TitleAbout';
import './AboutView.css';
import photo from '../assets/images/foto.jpg';
import nexticon2 from '../assets/icons/nexticon.png';
import CvSection from '../components/dinamic-components/CvSection';
import Skills from '../components/dinamic-components/Skills';

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

            <CvSection />

            <p className="box-about-p">
                Convertirme en desarrolladora front-end en 6 meses, liderar
                importantes proyectos desde su nacimiento hasta su finalización
                y cursar dos estudios universitarios simultáneamente han sido mis
                mayores restos.</p>

            <Skills />

            <div className="box-about-interes">
                <h2 id="intereses" className="box-about-h2">intereses</h2>
                <ul>
                    <li>Innovación tecnológica</li>
                    <li>Desarrollo web</li>
                    <li>Diseño de interfaz</li>
                    <li>Inteligencia artificial</li>
                    <li>Diseño responsable.</li>
                </ul>
            </div>

            <div>


            </div>

        </div>
    )
}

export default AboutView;