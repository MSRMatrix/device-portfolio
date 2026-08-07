import Icon from "../components/Icon";

const Contact = () => {
  const contactArray = [
    {
      id: 1,
      type: "email",
      label: "E-Mail",
      value: "michaelrolo11@gmail.com",
      link: "mailto:michaelrolo11@gmail.com",
      icon: "faEnvelope",
    },
    {
      id: 2,
      type: "phone",
      label: "Telefon",
      value: "+4915203064584",
      link: "tel:+4915203064584",
      icon: "faPhone",
    },
    {
      id: 3,
      type: "location",
      label: "Standort",
      value: "Dinklage",
      link: "https://www.google.com/maps/place/49413+Dinklage",
      icon: "faLocationDot",
    },
    {
      id: 4,
      type: "github",
      label: "GitHub",
      value: "MSRMatrix",
      link: "https://github.com/MSRMatrix",
      icon: "faGithub",
    },
    {
      id: 5,
      type: "linkedin",
      label: "LinkedIn",
      value: "Michael Santos Rolo",
      link: "https://www.linkedin.com/in/michael-santos-rolo-884960298/",
      icon: "faLinkedin",
    },
    // {
    //   id: 6,
    //   type: "website",
    //   label: "Webseite",
    //   value: "",
    //   link: "",
    //   icon: "faGlobe",
    // },
  ];
  return (
    <section className="contact-app">
      {contactArray.map((item) => (
        <article key={item.id} className="contact-card">
          <div className="contact-icon">
            <Icon iconName={item.icon} />
          </div>

          <div className="contact-content">
            <h2>{item.label}</h2>

            {item.link ? (
              <a
                href={item.link}
                target={
                  item.type === "github" || item.type === "linkedin"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.type === "github" || item.type === "linkedin"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.value}
              </a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Contact;
