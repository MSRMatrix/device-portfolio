import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../context/LoadingContext";
import LoadingScreen from "./LoadingScreen";

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

  const { loadingContext, setLoadingContext } = useContext(LoadingContext);
  useEffect(() => {
    if (loadingContext.loading) {
      const timer = setTimeout(() => {
        setLoadingContext({
          loading: false,
          opening: false,
        });
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);


  function openApp(item){

    setOpeningApp(item.path);


    setTimeout(()=>{

      navigate(item.path);

    },500);

  }


  return (
   <nav className={loadingContext.opening ? "app-in-use" : "device-app"}>
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
