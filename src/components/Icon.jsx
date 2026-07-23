import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

const iconMap = {

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