import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Navigation = () => {
  const navigate = useNavigate();
  const [openingApp, setOpeningApp] = useState(null);
  const navArray = [
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
  ];

  // Style muss entfernt werden. Statt dass das Style vom Gerät hier ist, muss es in Device

  const {appContext, setAppContext} = useContext(AppContext)


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

console.log(appContext);


return (
  <nav className={`device-app ${appContext ? "hide" : "app-open"}`}>
    {navArray.map((item) => (
      <div
        key={item.path}
        className={`screen-link ${
          openingApp === item.path ? "opening" : ""
        }`}
        onClick={() => openApp(item)}
      >
        <div className="app-icon">
          <Icon iconName={item.icon} />
        </div>

        <span>{item.name}</span>
      </div>
    ))}
  </nav> 
);
};

export default Navigation;
