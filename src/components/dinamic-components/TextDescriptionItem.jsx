import React, { useState } from 'react';
import ButtonText from '../buttons/ButtonText';

const TextDescriptionItem = (props) => {
    const [styleBoxText, setStyleBoxText] = useState({ display: 'none' })

    const showText = () => {
        setStyleBoxText({ display: 'block' });
    }

    /* const hideText = () => {
        setStyleBoxText({ display: 'none' });
    } */
    
    return (
        <div>
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
