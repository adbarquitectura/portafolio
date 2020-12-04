import React from 'react';
import TitleAbout from '../components/headers/TitleAbout';
import './AboutView.css';
import photo from '../assets/images/foto.png';
import cv from '../assets/files/cv.pdf';
import nexticon2 from '../assets/icons/nexticon.png';
import CvSection from '../components/dinamic-components/CvSection';
import Skills from '../components/dinamic-components/Skills';
import ButtonPrimary from '../components/buttons/ButtonPrimary';

const AboutView = () => {
    const openFile = (pathFile) => {
        var file = pathFile;
        window.open(file, "resizeable", "scrollbar");
    };

    return (
        <div className="box-about">
            <TitleAbout />

            <div className="box-tag">
                <a
                    href='#habilidades'
                    rel='noopener noreferrer'
                >Habilidades
            </a><br></br>
                <a
                    href='#intereses'
                    rel='noopener noreferrer'
                >Intereses
            </a>
            </div>

            <p className="box-about-p">
                Siento pasión y compromiso por lo que hago, aprendo rápido,
                siempre persistente, curiosa por aprender, analítica y estructurada.
                Trabajo bien bajo presión, de forma colaborativa e inter- área.
            </p>

            <img src={nexticon2} alt='photo' />

            <CvSection
                photo={photo}
            />

            <p className="box-about-p">
                Convertirme en desarrolladora front-end en 6 meses, liderar
                importantes proyectos desde su nacimiento hasta su finalización
                y cursar dos estudios universitarios simultáneamente han sido mis
                mayores restos.</p>

            {/* <a target="_blank" rel="noopener noreferrer" href="http://your_url_here.html">Link</a> */}

            <ButtonPrimary
                contenidobtn='Currículum'
                funcion={() => openFile(cv)}
            />
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