import { useState } from "react";

const Resume = () => {
  const [active, setActive] = useState(null);

  const resumeArray = [
    {
      id: 1,
      info: "Oberschule Artland",
      icon: "🎓",
      role: "Hauptschulabschluss",
      date: "07/2015",
      about:
        "Erworbener Abschluss",
    },

    {
      id: 2,
      info: "Berufsbildende Schule Bersenbrück",
      icon: "🪵",
      role: "Berufsvorbereitendes Jahr Holztechnik",
      date: "09.2015 - 07.2016",
      about:
        "Im Rahmen eines berufsvorbereitenden Jahres erhielt ich grundlegende Kenntnisse im Bereich Holztechnik. Dabei lernte ich verschiedene Werkzeuge und Arbeitstechniken kennen und sammelte erste praktische Erfahrungen in der Bearbeitung und Verarbeitung von Holz.",
    },
    {
      id: 3,
      info: "Bildungswerk der Niedersächsischen Wirtschaft GmbH",
      icon: "🧭",
      role: "Ausbildungsvorbereitendes Jahr",
      date: "08.2017 - 07.2018",
      about:
        "Teilnahme an einem ausbildungsvorbereitenden Jahr beim Bildungswerk der Niedersächsischen Wirtschaft GmbH zur beruflichen Orientierung und Vorbereitung auf den Einstieg in eine Berufsausbildung. Unterstützung bei der Suche nach einem geeigneten Ausbildungsplatz sowie bei der Entwicklung beruflicher Perspektiven.",
    },
    {
      id: 4,
      info: "Autohaus Trias GmbH",
      icon: "🚗",
      role: "Automobilbranche",
      date: "08.2018 - 01.2023",
      about:
        "Während meiner Tätigkeit bei der Autohaus Trias GmbH konnte ich umfangreiche Erfahrungen in der Automobilbranche sammeln. Zu meinen Aufgaben gehörten Kundenservice, Fahrzeugwartung, Reparaturen und die Organisation von Werkstattabläufen.",
    },
    {
      id: 5,
      info: "DCI Weiterbildung zum Web- und Softwareentwickler",
      icon: "💻",
      role: "IT-Weiterbildung",
      date: "05.2023 - 07.2024",
      about:
        "Während der Weiterbildung lag der Schwerpunkt auf moderner Webentwicklung. Dabei wurden unter anderem HTML, CSS, JavaScript, React, Node.js sowie Datenbanken und Backend-Entwicklung behandelt.",
    },
    {
      id: 6,
      info: "GIGANT GmbH",
      icon: "⚙️",
      role: "Monteur von Achssystemen",
      date: "02.2026 - jetzt",
      about:
        "Montage und Zusammenbau von Achssystemen nach technischen Vorgaben. Dabei gehören Qualitätskontrolle, präzises Arbeiten und der sichere Umgang mit technischen Komponenten zu meinen täglichen Aufgaben.",
      current: true,
    },
  ];

  return (
    <section className="resume-app">
      <div className="resume-timeline">
        {resumeArray.map((section) => (
          <article
            key={section.id}
            className={`resume-item ${section.current ? "current" : ""}`}
          >
            <div className="resume-dot">
              <span>{section.icon}</span>
            </div>

            <div
              className="resume-content"
              onClick={() =>
                setActive(active === section.id ? null : section.id)
              }
            >
              <div className="resume-header">
                <span className="date">{section.date}</span>

                <h2>{section.info}</h2>

                <span className="role">{section.role}</span>
              </div>

              <button>
                {active === section.id ? "Weniger anzeigen" : "Mehr erfahren"}
              </button>

              {active === section.id && (
                <p className="resume-description">{section.about}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Resume;
