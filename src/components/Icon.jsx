import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faGuitar,
  faBriefcase,
  faLaptop,
  faCircleInfo,
  faScrewdriverWrench,
  faEnvelope,
  faPhone,
  faLocationDot,
  faGlobe,
  faPen,
  faDumbbell,
  faCode,
  faBullseye

} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const iconMap = {
  faAt: faAt,
  faGuitar: faGuitar,
  faBriefcase: faBriefcase,
  faLaptop: faLaptop,
  faCircleInfo: faCircleInfo,
  faScrewdriverWrench: faScrewdriverWrench,
  faEnvelope: faEnvelope,
  faPhone: faPhone,
  faLocationDot: faLocationDot,
   faGithub: faGithub,
   faLinkedin: faLinkedin,
  faGlobe: faGlobe,
  faPen : faPen,
faDumbbell: faDumbbell,  
faCode: faCode,  
faBullseye: faBullseye,  
};

const Icon = ({ iconName }) => {
  const icon = iconMap[iconName];
  if (!icon) return null;

  return (
    <div className="icon">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Icon;
