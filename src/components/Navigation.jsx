import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import LoadingScreen from "./LoadingScreen";

const Navigation = ({ opening, setOpening }) => {
  const { loadingContext, setLoadingContext } = useContext(LoadingContext);
  const navigate = useNavigate()
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
             <div
  key={item.path}
  className="screen-link"
  onClick={() => {

    setTimeout(() => {
      setOpening(true)
      navigate(item.path);

    }, 1300);

  }}
>
  <div className="app-icon">
    <Icon iconName={item.icon} />
  </div>

  <span>{item.name}</span>

</div>
            ))}
          <Outlet />
        </>
      ) : (
        <LoadingScreen setOpening={setOpening} />
      )}
    </nav>
  );
};

export default Navigation;
