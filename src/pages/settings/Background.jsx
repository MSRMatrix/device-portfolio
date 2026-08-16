
import { useContext } from "react";import { BackgroundSettings } from "../../context/BackgroundSettings";
import { backgroundData } from "../../data/backgroundData/backgroundData";

const Background = () => {
  const { background, setBackground } = useContext(BackgroundSettings);

  const changeBackground = (item) => {
    const image = new Image();

    image.src = item.image;
    // Opacity oder ähnliches soll dann das neuste Bild ersetzen
    image.onload = () => {
      setBackground(item);
    };
  };

  return (
    <>
      {backgroundData.map((item) => (
        <button
          key={item.name}
          disabled={item.name === background.name}
          onClick={() => changeBackground(item)}
        >
          {item.name}
        </button>
      ))}

      <div className="background-credit">
        Foto von
        <a
          href={background.credit.authorUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {background.credit.author}
        </a>
        auf
        <a
          href={background.credit.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {background.credit.source}
        </a>
      </div>
    </>
  );
};

export default Background;
