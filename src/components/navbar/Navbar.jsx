import "./navbar.css"

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
    { icon: faAddressCard, name: "Kontakt", value: "contact-me" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  return (
    <div className="navbar">
      {buttonItems.map((button) => (
        <div className="navbutton">
        <button
          key={button.value}
          onClick={() => navigate(`/${button.value}`)}
          disabled={button.value === currentPath}
        >
          
          <FontAwesomeIcon icon={button.icon} />
        </button>
        <p>{button.name}</p>  
        </div>
        
      ))}
    </div>
  );
};

export default Navbar;