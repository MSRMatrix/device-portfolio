import "./skills.css";

import { skillList } from "../Data";

const Skills = () => {

  return (
    <div  className="skills">
      <h1 className="skills-title">Meine Fähigkeiten</h1>
      <div className="skills-list">
        {skillList.map((item, key) => (
          <div className="skills-item" key={key}>
            <h2 className="skills-name">{item.name}</h2>
            <img className="skills-image" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
