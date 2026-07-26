import acoustiFlow from "@/assets/images/projects/walkman.jpg";
import storageList from "@/assets/images/projects/parts.png";
import cashStuffing from "@/assets/images/projects/cash-stuffing.png";
import weatherApp from "@/assets/images/projects/weather-app.png";
import pokePalCodex from "@/assets/images/projects/pikachu-1.png";
// import todoWave from "@/assets/images/projects/todo-list.png";
import visualNovel from "@/assets/images/projects/visual-novel.png";

const Projects = () => {
  const projects = [
    {
      name: "AcoustiFlow",
      image: acoustiFlow,
    },
    {
      name: "Storage List",
      image: storageList,
    },
    {
      name: "Cash Stuffing",
      image: cashStuffing,
    },
    {
      name: "Weather App",
      image: weatherApp,
    },
    {
      name: "PokePal Codex",
      image: pokePalCodex,
    },
    // {
    //   name: "Todo Wave",
    //   image: todoWave,
    // },
    {
      name: "Visual Novel",
      image: visualNovel,
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <div key={project.name}>
          <img src={project.image} alt={project.name} />
          <h2>{project.name}</h2>
        </div>
      ))}
    </>
  );
};

export default Projects;
