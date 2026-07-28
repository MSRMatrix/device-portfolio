const Resume = () => {
  const resumeArray = [
    {
      id: 1,
      info: "Autohaus Trias GmbH",
      role: "Automobilbranche",
      date: "08.2018 - 01.2023",
      about:
        "Während meiner Tätigkeit bei der Autohaus Trias GmbH konnte ich umfangreiche Erfahrungen in der Automobilbranche sammeln. Zu meinen Aufgaben gehörten Kundenservice, Fahrzeugwartung, Reparaturen und die Organisation von Werkstattabläufen.",
    },

    {
      id: 2,
      info: "DCI Weiterbildung zum Web- und Softwareentwickler",
      role: "IT-Weiterbildung",
      date: "05.2023 - 07.2024",
      about:
        "Während der Weiterbildung lag der Schwerpunkt auf moderner Webentwicklung. Dabei wurden unter anderem HTML, CSS, JavaScript, React, Node.js sowie Datenbanken und Backend-Entwicklung behandelt.",
    },

    {
      id: 3,
      info: "GIGANT GmbH",
      role: "Monteur von Achssystemen",
      date: "02.2026 - jetzt",
      about:
        "Montage und Zusammenbau von Achssystemen nach technischen Vorgaben. Dabei gehören Qualitätskontrolle, präzises Arbeiten und der sichere Umgang mit technischen Komponenten zu meinen täglichen Aufgaben.",
    },
  ];

  return (
    <section className="resume-app">
      {resumeArray.map((section) => (
        <article key={section.id} className="resume-item">
          <h2>{section.info}</h2>

          <span className="role">{section.role}</span>

          <p className="date">{section.date}</p>

          <p>{section.about}</p>
        </article>
      ))}
    </section>
  );
};

export default Resume;
