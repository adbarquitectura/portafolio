import React, { useState, useEffect } from 'react';
import '../../views/AboutView.css';
;

const Skills = () => {

    const [dataSkills, setDataSkills] = useState([]);

    const getDataSkils = () => {
        fetch('Data-skills.json')
            .then(response => response.json())
            .then(data => setDataSkills(data));
    };

    useEffect(() => {
        getDataSkils();
    }, []);

    return (

        <div id="habilidades" className="box-skills">
            <h2>habilidades</h2>
            <div className="box-cards-skills">
                {
                    dataSkills.map((tecnology, index) => {
                        return (
                            <div key={index} className="box">
                                {tecnology.tecnologies.map((element, ind)=> {                                   
                                    return (

                                        <div className="box-img-skill" key={ind}>
                                            <img src={element.icon} alt={element.nameTecnology} />
                                            <p>{element.nameTecnology}</p>
                                        </div>
                                    )
                                })
                                }

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;