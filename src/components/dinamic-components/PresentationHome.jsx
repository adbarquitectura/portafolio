import React from 'react';
import '../../views/HomeView.css';
import TitleMain from '../headers/TitleMain';
import nexticon from '../../assets/icons/nexticon.png';

const PresentationHome = () => {
    return (
        <div className="box-home-content">
            <TitleMain />
            <h2>|amanda diaz|</h2>
            <p>
                “En las soluciones tecnológicas  fusiono mis conocimientos
                en el área de programación, diseño y administración, generando
                propuestas de valor que intenten responder a las necesidades del
                futuro utilizando menos recursos.”
            </p>
            <h4>Conoce más de mí</h4>
            <img src={nexticon} alt="" />
        </div>
    )
}

export default PresentationHome;
