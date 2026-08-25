import { useContext, useState } from "react";
import Icon from "./Icon";
import { BackgroundSettings } from "../context/BackgroundSettings";
import { backgroundData } from "../data/backgroundData/backgroundData";

const Intro = ({ setIntro }) => {
  const [power, setPower] = useState(false);
  const { setBackground } = useContext(BackgroundSettings);

  const turnOn = () => {
    if (power) return;

    setPower(true);
    setBackground(backgroundData[2])
    setTimeout(() => {
      setIntro(false);
    }, 1800);
  };

  return (
    <div className={`intro-screen ${power ? "power-on" : ""}`}>
      <button
        className="power-button"
        onClick={turnOn}
        aria-label="Portfolio einschalten"
      >
        <Icon iconName="faPowerOff" />
      </button>
    </div>
  );
};

export default Intro;