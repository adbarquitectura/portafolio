import React, { useState } from 'react';
import '../../views/ProjectsView.css';
import ButtonText from '../buttons/ButtonText';

const TextDescriptionItem = (props) => {
    const [styleBoxText, setStyleBoxText] = useState({ display: 'none' })

    const showText = () => {
        setStyleBoxText({
            display: 'block',
            animationName: 'example',
            animationDuration: '0.5s',
        });
    }

    /* const hideText = () => {
        setStyleBoxText({ display: 'none' });
    } */

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
