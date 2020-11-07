import React from 'react';
import './HomeView.css';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonSecundary from '../components/buttons/ButtonSecundary';
import NetworksSection from '../components/fixed-components/NetworksSection';
import TitleMain from '../components/headers/TitleMain';
import nexticon from '../assets/icons/nexticon.png';
import ProjectsView from './ProjectsView';

const HomeView = () => {
    return (
        <div className="box-home-main">
            <NetworksSection />
            <div className="box-home-content">
                <TitleMain />
                <p>
                    “En las soluciones tecnológicas  fusiono mis conocimientos
                    en el área de programación, diseño y administración, generando
                    propuestas de valor que intenten responder a las necesidades del
                    futuro utilizando menos recursos.”
            </p>
                <h4>Conoce más de mí</h4>
                <img src={nexticon} alt="" />
            </div>

            <ProjectsView />

        </div>
    )
}

export default HomeView;