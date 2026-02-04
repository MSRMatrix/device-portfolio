import "./skills.css";

import { skillPictures } from "../Pictures";

const Skills = () => {

  return (
    <>
      <h1>Meine Fähigkeiten</h1>
      <div className="skills-container">
        {skillPictures.map((item, key) => (
          <div className="skills" key={key}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
