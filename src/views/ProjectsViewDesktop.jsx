import React, { useState, useEffect } from 'react';
import './ProjectsViewDesktop.css';
import ButtonSecundaryLink from '../components/buttons/ButtonSecundaryLink';
import ButtonPrimaryLink from '../components/buttons/ButtonPrimaryLink';

const ProjectsViewDesktop = () => {
    const [dataProject, setDataProject] = useState([]);

    const getDataProject = () => {
        fetch('Data-proyectos.json')
            .then(response => response.json())
            .then(data => setDataProject(data));
    };

    useEffect(() => {
        getDataProject();
    }, []);

return (

    <div className="box-projects-desktop">

        <div className="box-cards-projects-desktop">
            {
                dataProject !== undefined && dataProject.map((project, index) => {
                    return (
                        <div style={{ backgroundImage: `url('${project.imgback}')` }} key={index} className="box-cards-single-desktop">

                            <div className="box-cards-in-single-desktop">
                                <div className="box-img-card-desktop">
                                    <img src={project.img} alt={project.name} />
                                </div>

                                <h2>
                                    {project.name}
                                </h2>
                                <p>
                                    {project.description}
                                </p>

                                <div className="box-cards-tecnologies-desktop">
                                    {project.tecnologies.map((tecnology, indx) => {
                                        return (
                                            <div key={indx} className="box-img-icon-desktop">
                                                <img src={tecnology.icon} alt={tecnology.nameTecnology} />
                                            </div>
                                        )

                                    })}
                                </div>

                                <div className="box-link-card-desktop">
                                    <ButtonPrimaryLink
                                        anclaLinkTo={project.url}
                                        contenidobtn='Ir a la App'
                                    />
                                    <ButtonSecundaryLink
                                        anclaLinkTo={project.repository}
                                        contenidobtn='Github'
                                    />
                                </div>

                            </div>

                        </div>

                    )
                })
            }
        </div>


    </div>
)
}

export default ProjectsViewDesktop; 
