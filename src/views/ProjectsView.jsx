import React, { useState, useEffect } from 'react';
import './ProjectsView.css';
//import dataProjects from '../../public/Data-proyectos.js';
import ButtonSecundaryLink from '../components/buttons/ButtonSecundaryLink';
import ButtonText from '../components/buttons/ButtonText';

const ProjectsView = () => {

    const [dataProject, setDataProject] = useState([]);

    const getDataProject = () => {
        fetch('Data-proyectos.json')
            .then(response => response.json())
            .then(data => setDataProject(data));
    };

    //const projects = dataProjects.proyectos;

    useEffect(() => {
        getDataProject();
    }, []);

    return (

        <div className="box-projects">
            <h2>proyectos</h2>
            <div className="box-cards-projects">
                {
                    dataProject.map((project, index) => {
                        return (
                            <div key={index} className="box-cards-single">
                                <div className="box-img-card">
                                    <img src={project.img} alt={project.name} />
                                </div>
                                <ButtonText
                                    contenidobtn={project.name}
                                />
                                <p>{project.description}</p>
                                <div className="box-cards-tecnologies">
                                    {project.tecnologies.map((tecnology, indx) => {
                                        return (
                                            <div key={indx} className="box-img-icon">
                                                <img src={tecnology.icon} alt={tecnology.nameTecnology} />
                                            </div>
                                        )

                                    })}
                                </div>
                                <ButtonSecundaryLink
                                    anclaLinkTo={project.url}
                                    contenidobtn=' Ir a la App'
                                />
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsView;