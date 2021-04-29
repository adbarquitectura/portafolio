import React from 'react';
import '../../views/HomeView.css';
import TitleMain from '../headers/TitleMain';
import nexticon from '../../assets/icons/nexticon.png';
import photo2 from '../../assets/images/foto2.png';

const PresentationHome = () => {
    return (
        <div className="box-home-content">
            <img className="box-img-photo" src={photo2} alt="" />
            <div>
                <TitleMain />
                <h2>Arquitecto</h2>
                <p>
                    “En las soluciones tecnológicas  fusiono mis conocimientos
                    en el área de programación, diseño y administración, generando
                    propuestas de valor que intenten responder a las necesidades del
                    futuro utilizando menos recursos.”
            </p>                
                <img className="box-img-icon" src={nexticon} alt="" />
            </div>

        </div>
    )
}

export default PresentationHome;
