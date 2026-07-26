const About = () => {
  const aboutArray = [
    {
      id: 1,
      title: "Wer ich bin",
      paragraphs: [""],
    },
    {
      id: 2,
      title: "Warum ich programmiere",
      paragraphs: [""],
    },
    {
      id: 3,
      title: "Meine Arbeitsweise",
      paragraphs: [""],
    },
    {
      id: 4,
      title: "Meine Motivation",
      paragraphs: [""],
    },
    {
      id: 5,
      title: "Meine Ziele",
      paragraphs: [""],
    },
    {
      id: 6,
      title: "Meine Hobbys",
      paragraphs: [""],
    },
    {
      id: 7,
      title: "Persönliches Zitat",
      paragraphs: [""],
    },
  ];
  return (
    <>
      {aboutArray.map((section) => (
        <section key={section.id}>
          <h2>{section.title}</h2>

          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      ))}
    </>
  );
};

export default About;
