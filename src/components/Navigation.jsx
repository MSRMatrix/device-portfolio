import { NavLink, Outlet } from "react-router-dom";
import Icon from "./Icon";
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import LoadingScreen from "./LoadingScreen";

const Navigation = ({ opening, setOpening }) => {
  const { loadingContext } = useContext(LoadingContext);
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

  return (
    <nav className={loadingContext ? "loadingScreen" : !opening ? "device-app" : "app-in-use"}>
      {!loadingContext ? (
        <>
          {!opening &&
            navArray.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="screen-link"
                onClick={() => setOpening(true)}
              >
                <div className="app-icon">
                  <Icon iconName={item.icon} />
                </div>

                <span>{item.name}</span>
              </NavLink>
            ))}
          <Outlet />
        </>
      ) : (
        <LoadingScreen />
      )}
    </nav>
  );
};

export default Navigation;
