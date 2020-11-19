import React, { useState, useEffect } from 'react';
import './ProjectsView.css';
import ButtonSecundaryLink from '../components/buttons/ButtonSecundaryLink';
import TextDescriptionItem from '../components/dinamic-components/TextDescriptionItem';

const ProjectsView = () => {

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

        <div className="box-projects">
            <h2>proyectos</h2>
            <div className="box-cards-projects">
                {
                    dataProject.map((project, index) => {
                        return (
                            <div styles={{ backgroundImage: `url('${project.img}')` }} key={index} className="box-cards-single">

                                <div className="box-cards-in-single">
                                    <div className="box-img-card">
                                        <img src={project.img} alt={project.name} />
                                    </div>

                                    <TextDescriptionItem
                                        nameProject={project.name}
                                        descriptionProject={project.description}
                                    />

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



                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsView;