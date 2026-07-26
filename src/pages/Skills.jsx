import html from "@/assets/images/skills/html.png";
import css from "@/assets/images/skills/css.png";
import js from "@/assets/images/skills/js.png";
import mernStack from "@/assets/images/skills/mern-stack.png";
import scss from "@/assets/images/skills/scss.png";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "MERN Stack",
      image: mernStack,
    },
    {
      name: "SCSS",
      image: scss,
    },
  ];

  return (
    <>
      {skills.map((skill) => (
        <div key={skill.name}>
          <img src={skill.image} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </>
  );
};

export default Skills;
