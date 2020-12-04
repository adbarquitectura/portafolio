import React from 'react';
import '../../views/AboutView.css';

const CvSection = (props) => {
    return (
        <div className="box-cv-content">

            <p>
            “La inseguridad de la nada es la certeza del Todo.”
            <br></br>
            ADB
            </p>
            
            <div className="box-img-about">
                <img src={props.photo} alt='photo' />
            </div>
        </div>
    )
}

export default CvSection;