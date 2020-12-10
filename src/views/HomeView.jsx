import React from 'react';
import './HomeView.css';
import NetworksSection from '../components/fixed-components/NetworksSection';
import Menu from '../components/fixed-components/Menu';
import NavBar from '../components/fixed-components/NavBar';
import Footer from '../components/fixed-components/Footer';
import ButtonTop from '../components/buttons/ButtonTop';


const HomeView = () => {
    return (
        <div className="box-home-main">
            <NetworksSection />
            <NavBar />
            <Menu
                linkToFirst='/'
                liFirstText='Proyectos'
                linkToSecond='/about'
                liSecondText='Acerca de mí'
                linkToThird='/contact'
                liThirdText='Contacto'
            />
            <ButtonTop />
            <Footer />
        </div>
    )
}

export default HomeView;


