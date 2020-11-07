import React from 'react';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonSecundary from '../components/buttons/ButtonSecundary';
import NetworksSection from '../components/fixed-components/NetworksSection';
import TitleMain from '../components/headers/TitleMain';

const HomeView = () =>{
    return(
        <div> 
            <TitleMain />
            <NetworksSection />
            
        </div>
    )
}

export default HomeView;