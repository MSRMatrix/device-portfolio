const About = () => {
  const aboutArray = [
    {
      id: 1,
      title: "Wer ich bin",
      paragraphs: [
        "Mein Name ist Michael Santos Rolo. Ich interessiere mich für Programmierung, kreative Projekte und die Entwicklung eigener Ideen.",
      ],
    },
    {
      id: 2,
      title: "Warum ich programmiere",
      paragraphs: [
        "Programmieren macht mir Spaß, weil ich eigene Ideen in funktionierende Anwendungen verwandeln kann. Auch nach einem langen Arbeitstag setze ich mich gerne an meinen Computer und arbeite Schritt für Schritt an meinen Projekten.",
      ],
    },
    {
      id: 3,
      title: "Meine Arbeitsweise",
      paragraphs: [
        "Ich sammle zuerst Ideen, probiere verschiedene Lösungswege aus und teste meine Funktionen mehrfach. Durch Ausprobieren und Verbessern entwickle ich meine Projekte kontinuierlich weiter.",
      ],
    },
    {
      id: 4,
      title: "Meine Motivation",
      paragraphs: [
        "Mein Ziel ist es, einen Beruf auszuüben, der mich langfristig begeistert und bei dem ich mich jeden Tag weiterentwickeln kann.",
      ],
    },
    {
      id: 5,
      title: "Meine Ziele",
      paragraphs: [
        "Ich möchte den Einstieg in die IT schaffen, meine Kenntnisse kontinuierlich erweitern und langfristig einen Arbeitsplatz finden, an dem ich mich wohlfühle und meine Fähigkeiten einbringen kann.",
      ],
    },
    {
      id: 6,
      title: "Persönliches Zitat",
      paragraphs: [
        "Ich habe kein festes Lebensmotto. Wenn ich eines nennen müsste, wäre es: Never give up.",
      ],
    },
  ];
  return (
    <div className="about-app">
      {aboutArray.map((section) => (
        <article key={section.id} className="about-card">
          <h2>{section.title}</h2>

          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      ))}
    </div>
  );
};

export default About;
