import { useEffect, useState } from "react";

const Intro = () => {
  const [counter, setCounter] = useState(0);

  const textArray = [
    "Michael Santos Rolo",
    "präsentiert",
    "sein Portfolio",
  ];

  useEffect(() => {
    if (counter >= textArray.length - 1) return;

    const timer = setTimeout(() => {
      setCounter((current) => current + 1);
    }, 4000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
  <div
    key={counter}
    className="intro-text"
  >
    {textArray[counter]}
  </div>
  );
};

export default Intro;