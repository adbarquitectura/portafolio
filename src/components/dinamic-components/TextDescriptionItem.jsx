import React, { useState } from 'react';
import '../../views/ProjectsView.css';
import ButtonText from '../buttons/ButtonText';
// import buttonPlus from '../../assets/icons/botonplusblue.png';

const TextDescriptionItem = (props) => {
    const [styleBoxText, setStyleBoxText] = useState({ display: 'none' })

    const showText = (anchor) => {
        if (window.matchMedia("(max-width: 400px)").matches) {
            setStyleBoxText({
                display: 'block'
            });
        }      
        window.location.href = "#"+anchor;
    }
    return (
        <div className="box-text-description">
            <ButtonText
                contenidobtn={props.nameProject}
                funcion={()=>showText(props.nameProject)}
            />
            <div style={styleBoxText} >
                <p>{props.descriptionProject}</p>
            </div>
        </div>

    )
};
export default TextDescriptionItem;
