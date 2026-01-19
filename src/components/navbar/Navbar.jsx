import { useLocation, useNavigate } from "react-router-dom";

import {
  faUser,
  faStar,
  faBriefcase,
  faHouseLaptop,
  faCertificate,
  faSitemap,
  faAddressCard

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {


  const buttonItems = [
    { icon: faStar, name: "Start", value: "" },
    { icon: faUser, name: "Über mich", value: "about-me" },
    { icon: faBriefcase, name: "Karriere", value: "career-history" },
    { icon: faCertificate, name: "Zertifikate", value: "certificates" },
    { icon: faHouseLaptop, name: "Projekte", value: "projects" },
    { icon: faSitemap, name: "Fähigkeiten", value: "skills" },
    { icon: faAddressCard, name: "Kontaktiere mich", value: "contact-me" },
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
          <FontAwesomeIcon icon={button.icon} />
        </button>
      ))}
    </>
  );
};

export default Navbar;