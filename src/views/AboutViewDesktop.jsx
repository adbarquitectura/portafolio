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

                <div className="box-about-cv-text">
                    <TitleAbout />

                    <p>
                        Siento pasión y compromiso por lo que hago, aprendo rápido,
                        siempre persistente, con gran actitud frente a los desafíos,
                        empática, curiosa por aprender, analítica y estructurada.
                        Trabajo bien bajo presión, de forma colaborativa e inter- área.
                    </p>


                    <div className="box-link-card-desktop">
                        <ButtonPrimary
                            contenidobtn='Currículum'
                            funcion={() => openFile(cv)}
                        />
                    </div>

                </div>

                <div className="box-about-cv-note">
                    <p>
                        Convertirme en desarrolladora front-end en 6 meses, liderar
                        importantes proyectos desde su nacimiento hasta su finalización
                        y cursar dos estudios universitarios simultáneamente han sido mis
                mayores retos.</p>

                </div>

            </div>

            <div className="box-about-cv-photo">
                <p>Me oriento al desarrollo de propuestas de innovación tecnológica,
                soluciones web y diseño de interfaz. Disfruto planificar e idear
                estrategias para optimizar los recursos y llevar al equipo al puerto
                del éxito.<span>Optimizar recursos y avanzar con un paso adelante son parte de mis
                prioridades en cualquier proyecto.</span></p>

                <CvSection
                    photo={photo2}
                />

            </div>


            <Skills />

            {/* <div className="box-about-interes-desktop">
                <h2 id="intereses">intereses</h2>
                <div className="box-about-interes-cv-desktop">
                    <div className="box-about-interes-cv-p">
                        <p>
                            Optimizar recursos y avanzar con un paso adelante son partes de mis prioridades en cualquier proyecto. </p>
                    </div>

                    <div className="box-about-interes-cv-ul">
                        <ul>
                            <li>Innovación tecnológica</li>
                            <li>Desarrollo web</li>
                            <li>Diseño de interfaz</li>
                            <li>Inteligencia artificial</li>
                            <li>Diseño responsable.</li>
                        </ul>

                    </div>

                    <div id="contanto" className="box-about-interes-contacto">
                        <p>Puedes contactarme aquí.</p>

                        <ButtonPrimaryLink
                            contenidobtn=' Escríbeme'
                            anclaLinkTo='mailto:adnamadiaz@gmail.com'
                        />
                    </div>
                </div>

            </div> */}

        </div>
    )
}

export default AboutViewDesktop;