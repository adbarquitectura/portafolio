import React from 'react';
import './HomeView.css';
import NetworksSection from '../components/fixed-components/NetworksSection';
import Menu from '../components/fixed-components/Menu';


const HomeView = () => {
    return (
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
    )
}

export default HomeView;


