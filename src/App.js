import logo from './assets/images/logos/Logo.png';
import './App.css';
import dataProjects from './Data-proyectos';

function App() {
  const projects = dataProjects.proyectos;
  console.log(projects);
  return (
    <div className="App">
      {
        projects.map((project, index) => {
          return (
            <div key={index}>
              {project.name}
              <img src={project.img} />
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
      <img src={logo} />
    </div>
  );
}

export default App;
