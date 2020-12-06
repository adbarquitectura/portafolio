import React from 'react';
import TitleAbout from '../components/headers/TitleAbout';
import './AboutViewDesktop.css';
import photo from '../assets/images/foto.png';
import cv from '../assets/files/cv.pdf';
import CvSection from '../components/dinamic-components/CvSection';
import Skills from '../components/dinamic-components/Skills';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import photo2 from '../assets/images/foto.png';
import ButtonPrimaryLink from '../components/buttons/ButtonPrimaryLink';

const AboutViewDesktop = () => {
    const openFile = (pathFile) => {
        var file = pathFile;
        window.open(file, "resizeable", "scrollbar");
    };

    return (
        <div id="acerca" className="box-about-desktop">
            <div className="box-about-cv-desktop">

                <div className="box-about-cv-photo">
                    <img  src={photo2} alt="" />
                </div>

                <div className="box-about-cv-text">
                    <TitleAbout />

                    <p>
                        Siento pasión y compromiso por lo que hago, aprendo rápido,
                        siempre persistente, curiosa por aprender, analítica y estructurada.
                        Trabajo bien bajo presión, de forma colaborativa e inter- área.</p>

                    <ButtonPrimary
                        contenidobtn='Currículum'
                        funcion={() => openFile(cv)}
                    />
                </div>

                <div className="box-about-cv-note">
                    <p><spa>"</spa>
                        Convertirme en desarrolladora front-end en 6 meses, liderar
                        importantes proyectos desde su nacimiento hasta su finalización
                        y cursar dos estudios universitarios simultáneamente han sido mis
                mayores restos.<spa>"</spa></p>

                </div>

            </div>

            <Skills />

            <div className="box-about-interes-desktop">
                <h2 id="intereses">intereses</h2>
                <div className="box-about-interes-cv-desktop">
                    <div>
                        <p>
                            Optimizar recursos y avanzar con un paso adelante son partes de mis prioridades en cualquier proyecto. </p>
                    </div>

                    <div>
                        <ul>
                            <li>Innovación tecnológica</li>
                            <li>Desarrollo web</li>
                            <li>Diseño de interfaz</li>
                            <li>Inteligencia artificial</li>
                            <li>Diseño responsable.</li>
                        </ul>

                    </div>

                    <div id="contanto">
                        <p>Puedes contactarme aquí.</p>

                        <ButtonPrimaryLink
                            contenidobtn=' Escríbeme'
                            anclaLinkTo='mailto:adnamadiaz@gmail.com'
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutViewDesktop;