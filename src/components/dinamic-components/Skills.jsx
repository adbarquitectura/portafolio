import React, { useState, useEffect } from 'react';
import '../../views/AboutView.css';
import ButtonCircleSecundary from '../buttons/ButtonCircleSecundary';
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

            <div className="box-in-skills">
                <div className="box-in-skills-button">
                    <ButtonCircleSecundary
                        contenidobtn='‹'
                        funcion={updateArraySkillsback}
                    />
                </div>

                <div className="box-cards-skills">
                    {
                        dataSkills[0] !== undefined && (
                            <div className="box-img-skill">
                                <img src={dataSkills[0].icon} />
                                <p>{dataSkills[0].nameTecnology}</p>
                            </div>
                        )
                    }
                    {
                        dataSkills[1] !== undefined && (
                            <div className="box-img-skill-desktop">
                                <img src={dataSkills[1].icon} />
                                <p>{dataSkills[1].nameTecnology}</p>
                            </div>
                        )
                    }
                    {
                        dataSkills[2] !== undefined && (
                            <div className="box-img-skill-desktop">
                                <img src={dataSkills[2].icon} />
                                <p>{dataSkills[2].nameTecnology}</p>
                            </div>
                        )
                    }
                    {
                        dataSkills[3] !== undefined && (
                            <div className="box-img-skill-desktop">
                                <img src={dataSkills[3].icon} />
                                <p>{dataSkills[3].nameTecnology}</p>
                            </div>
                        )
                    }
                    {
                        dataSkills[4] !== undefined && (
                            <div className="box-img-skill-desktop">
                                <img src={dataSkills[4].icon} />
                                <p>{dataSkills[4].nameTecnology}</p>
                            </div>
                        )
                    }
                </div>

                <div className="box-in-skills-button">
                    <ButtonCircleSecundary
                        contenidobtn='›'
                        funcion={updateArraySkillsAhead}
                    />
                </div>

            </div>

        </div >

    )
}

export default Skills;