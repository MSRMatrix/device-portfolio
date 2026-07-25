import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faGuitar,
  faBriefcase,
  faLaptop,
  faCircleInfo,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faAt: faAt,
  faGuitar: faGuitar,
  faBriefcase: faBriefcase,
  faLaptop: faLaptop,
  faCircleInfo: faCircleInfo,
  faScrewdriverWrench: faScrewdriverWrench,
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
