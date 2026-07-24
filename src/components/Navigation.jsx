import { NavLink, Outlet } from "react-router-dom";
import Icon from "./Icon";

// import guitar from "@/assets/icons/hobbies/guitar.png"

const Navigation = () => {
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

  return (
    <nav className="device-app">
      {navArray.map((item) => (
        <NavLink key={item.path} to={item.path} className="screen-link">
          <div className="app-icon">
            <Icon iconName={item.icon} />
          </div>

          <span>{item.name}</span>
        </NavLink>
      ))}
      <Outlet />
    </nav>
  );
};

export default Navigation;
