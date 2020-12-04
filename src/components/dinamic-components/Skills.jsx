import React, { useState, useEffect } from 'react';
import '../../views/AboutView.css';
import ButtonCircle from '../buttons/ButtonCircle';
;

const Skills = () => {

    const [dataSkills, setDataSkills] = useState([]);

    const getDataSkills = () => {
        fetch('Data-skills.json')
            .then(response => response.json())
            .then(data => setDataSkills(data));
    };

    // function update positions array froms data skill ahead
    const updateArraySkillsAhead = () => {
        dataSkills.push(dataSkills.shift());
        setDataSkills([...dataSkills]);
    };
    // function update positions array froms data skill back
    const updateArraySkillsback = (e) => {
        dataSkills.unshift(dataSkills.pop());
        setDataSkills([...dataSkills]);
    };

    useEffect(() => {
        getDataSkills();
    }, []);

    return (
        <div id="habilidades" className="box-skills">
            <h2>habilidades</h2>

            <div>
                <ButtonCircle
                    contenidobtn='<'
                    funcion={updateArraySkillsback}
                />
                <div className="box-cards-skills">
                    {
                        dataSkills[0] !== undefined && (
                            <div className="box-img-skill">
                                <img src={dataSkills[0].icon} />
                                <p>{dataSkills[0].nameTecnology}</p>
                            </div>
                        )

                    }
                </div>
                <ButtonCircle
                    contenidobtn='>'
                    funcion={updateArraySkillsAhead}
                />
            </div>

        </div >

    )
}

export default Skills;