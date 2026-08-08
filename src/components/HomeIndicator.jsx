import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const HomeIndicator = () => {
  const { setAppContext } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div
      className="home-indicator"
      onClick={() => {
        setAppContext(false);
        navigate("/");

        
      }}
    ></div>
  );
};

export default HomeIndicator;
