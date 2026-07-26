import Icon from "../components/Icon";

const Contact = () => {
    const contactArray = [
    {
        id: 1,
        type: "email",
        label: "E-Mail",
        value: "",
        link: "",
        icon: "faEnvelope",
    },
    {
        id: 2,
        type: "phone",
        label: "Telefon",
        value: "",
        link: "",
        icon: "faPhone",
    },
    {
        id: 3,
        type: "location",
        label: "Standort",
        value: "",
        link: "",
        icon: "faLocationDot",
    },
    {
        id: 4,
        type: "github",
        label: "GitHub",
        value: "",
        link: "",
        icon: "faGithub",
    },
    {
        id: 5,
        type: "linkedin",
        label: "LinkedIn",
        value: "",
        link: "",
        icon: "faLinkedin",
    },
    {
        id: 6,
        type: "website",
        label: "Webseite",
        value: "",
        link: "",
        icon: "faGlobe",
    },
];
   return (
  <section className="contact">

    {contactArray.map((item) => (
      <article key={item.id} className="contact-card">

        <Icon iconName={item.icon} />

        <div className="contact-content">

          <h2>{item.label}</h2>

          {item.link ? (
            <a
              href={item.link}
              target={item.type === "github" || item.type === "linkedin" ? "_blank" : undefined}
              rel={item.type === "github" || item.type === "linkedin" ? "noopener noreferrer" : undefined}
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