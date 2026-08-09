import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Navigation = () => {
  const navigate = useNavigate();
  const { appContext, setAppContext } = useContext(AppContext);
  const [openingApp, setOpeningApp] = useState(null);
  const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(0)

  const navArray = [
    [
      {
        name: "Über mich",
        path: "/about",
        icon: "faCircleInfo",
      },
      {
        name: "Skills",
        path: "/skills",
        icon: "faScrewdriverWrench",
      },
      {
        name: "Projekte",
        path: "/projects",
        icon: "faLaptop",
      },
      {
        name: "Werdegang",
        path: "/resume",
        icon: "faBriefcase",
      },
    ],
    [
      {
        name: "Hobbies",
        path: "/hobbies",
        icon: "faGuitar",
      },
      {
        name: "Kontakt",
        path: "/contact",
        icon: "faAt",
      },
      {
        name: "Musik",
        path: "/music",
        icon: "faHeadphones",
      },
      {
        name: "Einstellunge",
        path: "/settings",
        icon: "faGear",
      },
    ],
  ];

  function openApp(item) {
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
      {counter > 0 ? <div className="navigation-button left"  onClick={() => setCounter(counter - 1)}>
        <Icon iconName={"faCircleArrowLeft"}/>  
        </div> : <></>}
      {navArray[counter].map((item) => (
        <div
          key={item.path}
          className={`screen-link ${openingApp === item.path ? "opening" : ""}`}
          onClick={() => openApp(item)}
        >
          <div className="app-icon">
            <Icon iconName={item.icon} />
          </div>

          <span>{item.name}</span>
        </div>
      ))}
      {counter < navArray.length - 1 && (
        <div className="navigation-button right" onClick={() => setCounter(counter + 1)}>
        <Icon iconName={"faCircleArrowRight"}/>  
        </div>
)}
    </nav>
  );
};

export default Navigation;
