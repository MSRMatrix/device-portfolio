const ContactMe = () => {
  const contactData = [
    {
      name: "Email",
      info: "michaelrolo11@gmail.com"
    },
    {
      name: "Handynummer",
      info: "+49 1520 3064584"
    },
    {
      name: "Plattformen",
      info: "LinkedIn, Github"
    },
  ];

  return (
    <>
      <div>
        <h1>Kontaktiere mich!</h1>
        {contactData.map((item, key) => 
        <div key={key}>
            <h2>{item.name}</h2>
            <p>{item.info}</p>
        </div>
        )}
      </div>
    </>
  );
};

export default ContactMe;
