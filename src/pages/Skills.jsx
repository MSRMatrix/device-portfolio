import { useEffect, useState } from "react";

import html from "@/assets/images/skills/html.png";
import css from "@/assets/images/skills/css.png";
import js from "@/assets/images/skills/js.png";
import scss from "@/assets/images/skills/scss.png";
import react from "@/assets/images/skills/react.png";
import node from "@/assets/images/skills/node.png";
import express from "@/assets/images/skills/express.png";
import mongodb from "@/assets/images/skills/mongodb.png";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [visibleCode, setVisibleCode] = useState("");

  const skills = [
    {
      id: 1,
      name: "HTML",
      image: html,
      category: "Frontend",
      description: "Strukturierung moderner Webseiten.",
      code: `<div>
  <h1>Hello</h1>
</div>`,
    },
    {
      id: 2,
      name: "CSS",
      image: css,
      category: "Frontend",
      description: "Design, Layouts und responsive Oberflächen.",
      code: `.button {
  display: flex;
  color: white;
}`,
    },
    {
      id: 3,
      name: "JavaScript",
      image: js,
      category: "Frontend",
      description: "Interaktive Anwendungen und Logik.",
      code: `const greet = () => {
  return "Hello";
};`,
    },
    {
      id: 4,
      name: "SCSS",
      image: scss,
      category: "Styling",
      description: "Strukturierteres CSS mit Variablen und Nesting.",
      code: `$accent: #fff;

.button {
  color: $accent;

  &:hover {
    opacity: 0.8;
  }
}`,
    },
    {
      id: 5,
      name: "React",
      image: react,
      category: "Frontend",
      description: "Entwicklung interaktiver Benutzeroberflächen.",
      code: `const App = () => {
  return <h1>Hello World</h1>;
};`,
    },
    {
      id: 6,
      name: "Node.js",
      image: node,
      category: "Backend",
      description: "Serverseitige Anwendungen mit JavaScript.",
      code: `const http = require("http");

const server = http.createServer(
  (req, res) => {
    res.end("Hello");
  }
);`,
    },
    {
      id: 7,
      name: "Express",
      image: express,
      category: "Backend",
      description: "Entwicklung von APIs und Webservern.",
      code: `app.get("/users", (req, res) => {
  res.json(users);
});`,
    },
    {
      id: 8,
      name: "MongoDB",
      image: mongodb,
      category: "Database",
      description: "Arbeiten mit dokumentenorientierten Datenbanken.",
      code: `const user = await User.findOne({
  email: "user@example.com"
});`,
    },
  ];

  useEffect(() => {
    if (activeSkill === null) return;

    const skill = skills.find((skill) => skill.id === activeSkill);

    if (!skill) return;

    let index = 0;
    let deleting = false;
    let timeout;

    const animate = () => {
      if (!deleting) {
        index++;

        setVisibleCode(skill.code.slice(0, index));

        if (index >= skill.code.length) {
          timeout = setTimeout(() => {
            deleting = true;
            animate();
          }, 1500);

          return;
        }

        timeout = setTimeout(animate, 35);
      } else {
        index--;

        setVisibleCode(skill.code.slice(0, index));

        if (index <= 0) {
          setVisibleCode("");
          setActiveSkill(null);
          return;
        }

        timeout = setTimeout(animate, 20);
      }
    };

    animate();

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSkill]);

  const showCode = (id) => {
    if (activeSkill !== null) return;

    setActiveSkill(id);
  };

  return (
    <section className="skills-app">
      {skills.map((skill) => (
        <article key={skill.id} className="skill-card">
          <img src={skill.image} alt={skill.name} />

          <h2>{skill.name}</h2>

          <span>{skill.category}</span>

          <p>{skill.description}</p>

          {activeSkill === skill.id && (
            <pre className="skill-code">
              {visibleCode}
              <span className="code-cursor">|</span>
            </pre>
          )}

          <button
            type="button"
            onClick={() => showCode(skill.id)}
            disabled={activeSkill !== null}
          >
            &lt;/&gt; Code anzeigen
          </button>
        </article>
      ))}
    </section>
  );
};

export default Skills;

// Code muss verkürzt/exportiert werden