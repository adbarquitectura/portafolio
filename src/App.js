import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import HomeView from './views/HomeView';
import ProjectsView from './views/ProjectsView'

import logo from './assets/images/logos/Logo.png';

function App() {
return(
<div className="father-container">
<Router>

<Switch>      
  <Route path="/projects">
    <ProjectsView />
  </Route>
  <Route path="/">
    <HomeView />
  </Route>
</Switch>

</Router>

</div>

)
  

  /* const projects = dataProjects.proyectos;
  console.log(projects);
  return (
    <div className="father-container">
      <h1>Proyectos</h1>
      {
        projects.map((project, index) => {
          return (
            <div key={index}>
              {project.name}
              <img src={project.img} alt="" />
              {project.tecnologies.map((tecnology, indx) => {
                return (
                  <div key={indx}>
                    {tecnology.nameTecnology}                    
                  </div>
                )

              })}

            </div>

          )
        })
      }
      <img src={logo} alt="" />
    </div>
  ); */
}

export default App;
