import React from 'react';
import './ProjectsView.css';
import dataProjects from '../Data-proyectos';
import ButtonSecundaryLink from '../components/buttons/ButtonSecundaryLink';

const ProjectsView = () => {
    const projects = dataProjects.proyectos;
    return (
        <div className="box-projects">
            <h2>proyectos</h2>
            <div className="box-cards-projects">
                {
                    projects.map((project, index) => {
                        return (
                            <div key={index} className="box-cards-single">
                                <img src={project.img} alt="" />
                                <h4>{project.name}</h4>
                                <p>{project.description}</p>
                                <div className="box-cards-tecnologies">
                                    {project.tecnologies.map((tecnology, indx) => {
                                        return (
                                            <div key={indx} >
                                                {tecnology.nameTecnology}
                                            </div>
                                        )

                                    })}
                                </div>
                                <ButtonSecundaryLink
                                    anclaLinkTo= {project.url}
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