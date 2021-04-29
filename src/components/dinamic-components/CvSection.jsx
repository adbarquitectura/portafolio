import React from 'react';
import '../../views/AboutView.css';

const CvSection = (props) => {
    return (
        <div className="box-cv-content">

            <p>
            “Los buenos equipos hacen la diferencia.”
            <br></br>
            <span>ADB</span>
            </p>
            
            <div className="box-img-about">
                <img src={props.photo} alt='photo' />
            </div>
        </div>
    )
}

export default CvSection;