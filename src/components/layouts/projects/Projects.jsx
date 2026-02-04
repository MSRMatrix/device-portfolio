import "./projects.css"

import { projectsPictures } from "../Pictures";

const Projects = () => {
  return (
    <div className="project-container">
      {projectsPictures.map((item, key) => 
        <a href={item.href} target="_blank" className="project" key={key}>
            <h2>{item.name}</h2>
            <img src={item.pic} alt={item.name} />
        </a>
      )}
    </div>
  );
};

export default Projects;
