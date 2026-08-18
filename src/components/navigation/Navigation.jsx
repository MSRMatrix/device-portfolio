import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Icon from "../Icon";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Navigation = () => {
  const navigate = useNavigate();
  const { appContext, setAppContext } = useContext(AppContext);
  const [openingApp, setOpeningApp] = useState(null);
  const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(0)

  const navArray = [
    [
      {
        name: "Über mich",
        path: "/about",
        icon: "faCircleInfo",
        disabled: false,
        color: "",
      },
      {
        name: "Skills",
        path: "/skills",
        icon: "faScrewdriverWrench",
        disabled: false,
        color: "",
      },
      {
        name: "Projekte",
        path: "/projects",
        icon: "faLaptop",
        disabled: false,
        color: "",
      },
      {
        name: "Werdegang",
        path: "/resume",
        icon: "faBriefcase",
        disabled: false,
        color: "",
      },
    ],
    [
      {
        name: "Hobbies",
        path: "/hobbies",
        icon: "faGuitar",
        disabled: false,
        color: "",
      },
      {
        name: "Kontakt",
        path: "/contact",
        icon: "faAt",
        disabled: false,
        color: "",
      },
      {
        name: "Musik",
        path: "/music",
        icon: "faHeadphones",
        disabled: true,
        color: "",
      },
      {
        name: "Einstellunge",
        path: "/settings",
        icon: "faGear",
        disabled: false,
        color: "",
      },
    ],
  ];

  function openApp(item) {
    if (!item || item.disabled) {
      console.log("Die Function fehlt noch!");
      return;
    }

    setOpeningApp(item.path);

    setTimeout(() => {
      navigate(item.path);
      setAppContext(true);
    }, 500);

    setTimeout(() => {
      setOpeningApp(null);
    }, 1000);
  }

 return (
  <nav className={`device-app ${appContext ? "hide" : "app-open"}`}>
    {counter > 0 && (
      <div
        className="navigation-button left"
        onClick={() => setCounter(counter - 1)}
      >
        ←
      </div>
    )}

    <div className="navigation-grid">
      {navArray[counter].map((item, index) => (
        <div
          key={item.path}
          className={`screen-link ${
            openingApp === item.path ? "opening" : ""
          } ${item.disabled ? "disabled" : ""}`}
          style={{
            "--item-color": item.color || "var(--accent)",
          }}
          onClick={() => openApp(item)}
        >
          <span className="screen-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="screen-content">
            <span className="screen-name">{item.name}</span>

            <span className="screen-line" />

            <span className="screen-action">
              Öffnen <span>↗</span>
            </span>
          </div>

          <span className="screen-corner">01</span>
        </div>
      ))}
    </div>

    {counter < navArray.length - 1 && (
      <div
        className="navigation-button right"
        onClick={() => setCounter(counter + 1)}
      >
        →
      </div>
    )}
  </nav>
);
};

export default Navigation;
