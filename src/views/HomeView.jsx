import React from 'react';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonSecundary from '../components/buttons/ButtonSecundary';

const HomeView = () =>{
    return(
        <div> estoy en home 
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