import { useEffect, useState } from "react";
import Camera from "./Camera";

const Staturbar = ({ theme, setTheme }) => {
  const max = 100;

  const [percent] = useState(() => Math.floor(Math.random() * (max + 1)));

  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function themeMode() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="statusbar">
      <span className="status-time">
        {clock.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>

      <div className="status-icons">


        <div className="battery">
          <div
            className="battery-level"
            style={{
              width: `${percent}%`,
              background:
                percent <= 20
                  ? "#FF3B30"
                  : percent <= 50
                    ? "#FFD60A"
                    : "#34C759",
            }}
          />
        </div>
<Camera />
        {/* <span className="battery-percent">{percent}%</span> */}

        <button className="theme-button" onClick={themeMode}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Staturbar;
