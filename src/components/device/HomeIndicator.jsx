import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/context/AppContext";
import Icon from "../Icon";

const HomeIndicator = () => {
  const { setAppContext } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setAppContext(false);
    navigate("/");
  };

  const homeIndicatorArray = ["faChevronLeft", "faCircle", "faSquare"];

  return (
    <div className="home-indicator" onClick={handleClick}>
      {homeIndicatorArray.map((item) => (
        <Icon key={item} iconName={item} />
      ))}
    </div>
  );
};

export default HomeIndicator;