import React from 'react';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonSecundary from '../components/buttons/ButtonSecundary';
import NetworksSection from '../components/fixed-components/NetworksSection';

const HomeView = () =>{
    return(
        <div> estoy en home 
            <NetworksSection />
            <ButtonPrimary 
            contenidobtn = " Primary"
            />
            <ButtonSecundary 
            contenidobtn = " Secundary"
            />
        </div>
    )
}

export default HomeView;