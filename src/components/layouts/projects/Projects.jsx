import "./projects.css"

import { projectsPictures } from "../Pictures";

const Projects = () => {

    
  const projectNames = [
    {
      name: "AcousticFlow",
      href: "https://media-player-seven-black.vercel.app/",
      pic: projectsPictures.AcoustiFlow,
    },
    {
      name: "StuffIt",
      href: "https://stuffit-x83e.onrender.com/",
      pic: projectsPictures.cashStuff,
    },
    {
      name: "Weather App",
      href: "https://weatherapp-amber-six.vercel.app/",
      pic: projectsPictures.weatherApp,
    },
    {
      name: "PokePal Codex",
      href: "https://pokepal-codex.vercel.app/",
      pic: projectsPictures.pikachu,
    },
    {
      name: "TodoWave",
      href: "https://todo-frontend-five-eta.vercel.app/",
      pic: projectsPictures.todoWave,
    },
  ];
  return (
    <div className="project-container">
      {projectNames.map((item, key) => 
        <a href={item.href} target="_blank" className="project" key={key}>
            <h2>{item.name}</h2>
            <img src={item.pic} alt={item.name} />
        </a>
      )}
    </div>
  );
};

export default Projects;
