import React from 'react';
import './HomeView.css';
import NetworksSection from '../components/fixed-components/NetworksSection';
import Menu from '../components/fixed-components/Menu';
import TitleMain from '../components/headers/TitleMain';
import nexticon from '../assets/icons/nexticon.png';
import ProjectsView from './ProjectsView';

const HomeView = () => {
    return (
        <div className="box-home-main">
            <NetworksSection />
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

            <ProjectsView />
            <Menu />
        </div>
    )
}

export default HomeView;