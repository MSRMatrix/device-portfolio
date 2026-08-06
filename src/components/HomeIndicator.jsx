import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";

const HomeIndicator = () => {
  const { loadingContext, setLoadingContext } = useContext(LoadingContext);

  const navigate = useNavigate();

  return (
    <div
      className="home-indicator"
      onClick={() => {
        navigate("/");

        setLoadingContext({
          loading: false,
          opening: false,
        });
      }}
    ></div>
  );
};

export default HomeIndicator;
