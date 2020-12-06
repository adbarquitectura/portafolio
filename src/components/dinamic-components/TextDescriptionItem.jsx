import React, { useState } from 'react';
import '../../views/ProjectsView.css';
import ButtonText from '../buttons/ButtonText';
// import buttonPlus from '../../assets/icons/botonplusblue.png';

const TextDescriptionItem = (props) => {
    const [styleBoxText, setStyleBoxText] = useState({ display: 'none' })

    const showText = () => {
        if (window.matchMedia("(max-width: 400px)").matches) {
            setStyleBoxText({
                display: 'block',
                animationName: 'example',
                animationDuration: '0.5s',
            });
        }      

    }
    return (
        <div className="box-text-description">
            <ButtonText
                contenidobtn={props.nameProject}
                funcion={showText}
            />
            <div style={styleBoxText} >
                <p>{props.descriptionProject}</p>
            </div>
        </div>

    )
};
export default TextDescriptionItem;
