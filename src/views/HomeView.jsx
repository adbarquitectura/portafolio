import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import './HomeView.css';
import NetworksSection from '../components/fixed-components/NetworksSection';
import Menu from '../components/fixed-components/Menu';


const HomeView = () => {
    return (
        <Router>
            <div className="box-home-main">
                <NetworksSection />

                <Menu
                    linkToFirst='/about'
                    liFirstText='Acerca de mí'
                    linkToSecond='/'
                    liSecondText='Proyectos'
                    linkToThird='/contact'
                    liThirdText='Contacto'
                />
            </div>

        </Router>

    )
}

export default HomeView;


