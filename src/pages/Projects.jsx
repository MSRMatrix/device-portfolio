import acoustiFlow from "@/assets/images/projects/walkman.jpg";
import storageList from "@/assets/images/projects/parts.png";
import cashStuffing from "@/assets/images/projects/cash-stuffing.png";
import weatherApp from "@/assets/images/projects/weather-app.png";
import pokePalCodex from "@/assets/images/projects/pikachu-1.png";
// import todoWave from "@/assets/images/projects/todo-list.png";
import visualNovel from "@/assets/images/projects/visual-novel.png";

const Projects = () => {
  const projectsArray = [
    {
      id: 1,

      name: "AcoustiFlow",

      image: acoustiFlow,

      type: "Web App",

      description:
        "Eine Anwendung rund um Musik, mit der Songs organisiert und verwaltet werden können.",

      technologies: ["React", "JavaScript", "CSS"],

      features: ["Musikverwaltung", "Modernes Interface", "Responsive Design"],

      status: "In Entwicklung",

      github: "",

      live: "",
    },

    {
      id: 2,

      name: "Storage List",

      image: storageList,

      type: "Fullstack App",

      description:
        "Eine Anwendung zur Verwaltung von Lagerbeständen und Bauteilen mit Benutzerverwaltung.",

      technologies: ["Mern-Stack", "JavaScript"],

      features: [
        "Benutzerkonten",
        "Teileverwaltung",
        "Datenbankanbindung",
        "API Kommunikation",
      ],

      status: "In Entwicklung",

      github: "",

      live: "",
    },

    {
      id: 3,

      name: "Cash Stuffing",

      image: cashStuffing,

      type: "Finance App",

      description:
        "Eine Anwendung zur Verwaltung von Budgets nach dem Cash-Stuffing-Prinzip.",

      technologies: ["React", "JavaScript", "CSS"],

      features: [
        "Budgetverwaltung",
        "Übersicht über Ausgaben",
        "Einfache Bedienung",
      ],

      status: "Fertig",

      github: "",

      live: "",
    },

    {
      id: 4,

      name: "Weather App",

      image: weatherApp,

      type: "Web App",

      description:
        "Eine Wetteranwendung mit aktuellen Wetterinformationen über eine API.",

      technologies: ["React", "JavaScript", "API"],

      features: ["Wettersuche", "API-Anbindung", "Dynamische Daten"],

      status: "Fertig",

      github: "",

      live: "",
    },

    {
      id: 5,

      name: "PokePal Codex",

      image: pokePalCodex,

      type: "Web App",

      description:
        "Eine Anwendung zum Anzeigen und Verwalten von Informationen über Pokémon.",

      technologies: ["React", "JavaScript", "API"],

      features: [
        "Pokémon-Suche",
        "Daten aus API laden",
        "Übersichtliche Darstellung",
      ],

      status: "Fertig",

      github: "",

      live: "",
    },

    /*
  {
    id: 6,

    name: "Todo Wave",

    image: todoWave,

    type: "Productivity App",

    description:
      "Eine moderne To-do-Anwendung zur Organisation von Aufgaben.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],

    features: [
      "Aufgaben erstellen",
      "Aufgaben verwalten",
      "Status ändern",
    ],

    status: "Geplant",

    github: "",

    live: "",

  },
  */

    {
      id: 7,

      name: "Visual Novel",

      image: visualNovel,

      type: "Creative Project",

      description:
        "Ein interaktives Story-Projekt mit Fokus auf Entscheidungen und Erzählung.",

      technologies: ["React", "JavaScript", "CSS"],

      features: [
        "Interaktive Geschichte",
        "Entscheidungssystem",
        "Eigene Gestaltung",
      ],

      status: "In Entwicklung",

      github: "",

      live: "",
    },
  ];

  return (
    // Link fehlt
    <section className="projects-app">
      {projectsArray.map((project) => (
        <article key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>

          <div className="project-content">
            <h2>{project.name}</h2>

            <span className="project-type">{project.type}</span>

            <p>{project.description}</p>

            <div className="technologies">
              {project.technologies.map((tech) => (
                <small key={tech}>{tech}</small>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
