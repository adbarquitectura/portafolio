import React from 'react';
import '../../views/AboutView.css';
import ButtonPrimary from '../buttons/ButtonPrimary';

const CvSection = () => {
    return (
        <div className="box-cv-content">

            <p>
                Siento pasión y compromiso por lo que hago, aprendo rápido,
                siempre persistente, curiosa por aprender, analítica y estructurada,
                con interés en el desarrollo de propuesta de innovación tecnológica,
                soluciones web y diseño de interfaz, orientadas al manejo efectivo de
                recursos y al logro eficiente de resultados que mejoren constantemente
                la experiencia del usuario y del mundo; habituada a un alto nivel de
                exigencia y trabajo colaborativo e interdisciplinario a través de la
                implementación de metodologías agiles.
            </p>
            <ButtonPrimary
                contenidobtn='Currículum'
            />
        </div>
    )
}

export default CvSection;