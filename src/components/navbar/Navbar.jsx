import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const buttonItems = [
    { name: "Start", value: "" },
    { name: "Über mich", value: "about-me" },
    { name: "Karriere", value: "career-history" },
    { name: "Zertifikate", value: "certificates" },
    { name: "Projekte", value: "projects" },
    { name: "Fähigkeiten", value: "skills" },
    { name: "Kontaktiere mich", value: "contact-me" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  return (
    <>
      {buttonItems.map((button) => (
        <button
          key={button.value}
          onClick={() => navigate(`/${button.value}`)}
          disabled={button.value === currentPath}
        >
          {button.name}
        </button>
      ))}
    </>
  );
};

export default Navbar;