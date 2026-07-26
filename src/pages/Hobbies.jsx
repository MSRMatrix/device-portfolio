// Images fehlen. Müssen noch erstellt werden

const Hobbies = () => {
  const hobbiesArray = [
    {
      id: 1,
      name: "Gitarre spielen",
    //   image: guitar,
      description: "",
      type: "music",
    },
    {
      id: 2,
      name: "Geschichten schreiben",
    //   image: writing,
      description: "",
      type: "writing",
    },
    {
      id: 3,
      name: "Sport",
    //   image: sport,
      description: "",
      type: "sport",
    },
    {
      id: 4,
      name: "Programmieren",
    //   image: coding,
      description: "",
      type: "coding",
    },
    {
      id: 5,
      name: "Darts",
    //   image: darts,
      description: "",
      type: "game",
    },
  ];
  return (<>
  {hobbiesArray.map((section) => (
    <section id={section.id}>
        <h2>{section.name}</h2>
        {/* <img src={section.image} alt={section.name} /> */}
        <p>{section.description}</p>
        {/* Irgendwas mit Type */}
    </section>
  ))}
  </>);
};

export default Hobbies;
