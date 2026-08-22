import { useContext } from "react";
import { BackgroundSettings } from "../../context/BackgroundSettings";
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
      <div className="background-selection">
        {backgroundData.map((item) => (
          <button
            key={item.name}
            className={`background-option ${
              item.name === background.name ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            disabled={item.name === background.name}
            onClick={() => changeBackground(item)}
          >
            <div className="background-overlay" />

            <div className="background-content">
              <span className="background-credit-title">Foto von</span>

              <span className="background-option-name">{item.name}</span>

              <span className="background-option-line" />

              <div className="background-credits">
                <a
                  className="background-credit-button"
                  href={item.credit.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.credit.author}
                </a>

                <a
                  className="background-credit-button"
                  href={item.credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.credit.source}
                </a>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Background;
