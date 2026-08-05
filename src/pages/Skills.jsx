import html from "@/assets/images/skills/html.png";
import css from "@/assets/images/skills/css.png";
import js from "@/assets/images/skills/js.png";
import mernStack from "@/assets/images/skills/mern-stack.png";
import scss from "@/assets/images/skills/scss.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      image: html,
      category: "Frontend",
      description: "Strukturierung moderner Webseiten.",
    },
    {
      id: 2,
      name: "CSS",
      image: css,
      category: "Frontend",
      description: "Design, Layouts und responsive Oberflächen.",
    },
    {
      id: 3,
      name: "JavaScript",
      image: js,
      category: "Frontend",
      description: "Interaktive Anwendungen und Logik.",
    },
    {
      id: 4,
      name: "MERN Stack",
      image: mernStack,
      category: "Fullstack",
      description: "Entwicklung mit MongoDB, Express, React und Node.js.",
    },
    {
      id: 5,
      name: "SCSS",
      image: scss,
      category: "Styling",
      description: "Strukturierteres CSS mit Variablen und Nesting.",
    },
  ];
  return (
    <section className="skills-app">
      {skills.map((skill) => (
        <article key={skill.id} className="skill-card">
          <img src={skill.image} alt={skill.name} />

          <h2>{skill.name}</h2>

          <span>{skill.category}</span>

          <p>{skill.description}</p>
        </article>
      ))}
    </section>
  );
};

export default Skills;
