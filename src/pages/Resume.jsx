const Resume = () => {
  const resumeArray = [
    // {
    //   info: "Berufsvorbereitungsjahr Holztechnik",
    //   date: "2015-2016",
    //   about:
    //     "Während des Berufsvorbereitungsjahres in der Holztechnik wurde ein grundlegendes Verständnis für die Arbeit mit Holz vermittelt. Dies umfasste theoretische und praktische Kenntnisse in der Holzbearbeitung, die Bedienung von Maschinen und Werkzeugen sowie die Erstellung und Umsetzung von technischen Zeichnungen.",
    // },
    // {
    //   info: "Bildungswerk der Niedersächsischen Wirtschaft gGmbH ",
    //   date: "2017-2018",
    //   about:
    //     "Bei der Bildungswerk der Niedersächsischen Wirtschaft gGmbH wurde eine umfassende berufliche Weiterbildung absolviert. Der Fokus lag auf der beruflichen Integration und der Entwicklung von Schlüsselkompetenzen, wie z.B. Teamarbeit, Projektmanagement und Kommunikation.",
    // },
    {
      info: "Autohaus Trias GmbH",
      date: "08.2018 - 01.2023",
      about:
        "Während der Tätigkeit bei der Autohaus Trias GmbH wurden umfangreiche Erfahrungen in der Automobilbranche gesammelt. Verantwortlichkeiten umfassten den Kundenservice, die Fahrzeugwartung und -reparatur sowie die Koordination von Werkstattterminen.",
    },
    {
      info: "DCI Weiterbildung zum Web- und Softwareentwickler",
      date: "05.2023 - 07.2024",
      about:
        "Die Weiterbildung bei DCI konzentriert sich auf die Ausbildung zum Web- und Softwareentwickler. Der Lehrplan umfasst eine Vielzahl von Programmiersprachen und Technologien, darunter HTML, CSS, JavaScript, React, Node.js und Datenbankmanagement.",
    },
     {
      info: "GIGANT GmbH",
      date: "02.2026 - jetzt",
      about:
        "Montage und Zusammenbau von Achssystemen nach technischen Vorgaben. Dabei gehören Qualitätskontrolle, präzises Arbeiten und der sichere Umgang mit technischen Komponenten zu meinen täglichen Aufgaben.",
    },
  ];

  return (<>
  
  {resumeArray.map((section) => (

    <section>
        <h2>{section.info}</h2>
        <p>{section.date}</p>
        <p>{section.about}</p>
    </section>
  ))}
  </>);
};

export default Resume;
