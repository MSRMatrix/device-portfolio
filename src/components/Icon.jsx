import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // Hobbies
  faGuitar,
  faPen,
  faDumbbell,
  faCode,
  faBullseye,
  // Kontakt
  faEnvelope,
  faPhone,
  faLocationDot,
  // Für den Fall falls ein Icon nichtmehr geht
  faCircleQuestion,
  // Navigation
  faCircleArrowLeft,
  faCircleArrowRight,
  // Intro
  faPowerOff,
  // Werdegang
  faGraduationCap,
  faHammer,
  faCompass,
  faCarSide,
  faComputer,
  faIndustry,
  // Sound
  faVolume,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  // Hobbies
  faGuitar: faGuitar,
  faPen: faPen,
  faDumbbell: faDumbbell,
  faCode: faCode,
  faBullseye: faBullseye,
  // Kontakt
  faEnvelope: faEnvelope,
  faPhone: faPhone,
  faLocationDot: faLocationDot,
  faGithub: faGithub,
  faLinkedin: faLinkedin,
  // Für den Fall falls ein Icon nichtmehr geht
  faCircleQuestion: faCircleQuestion,
  // Navigation
  faCircleArrowLeft: faCircleArrowLeft,
  faCircleArrowRight: faCircleArrowRight,
  // Intro
  faPowerOff: faPowerOff,
  // Werdegang
  faGraduationCap: faGraduationCap,
  faHammer: faHammer,
  faCompass: faCompass,
  faCarSide: faCarSide,
  faComputer: faComputer,
  faIndustry: faIndustry,
  faVolume: faVolume,
  faVolumeXmark: faVolumeXmark,
};

const Icon = ({ iconName }) => {
  const icon = iconMap[iconName] || faCircleQuestion;

  return (
    <div className="icon">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};
export default Icon;
