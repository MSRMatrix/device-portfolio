import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../context/LoadingContext";
import LoadingScreen from "./LoadingScreen";

const Navigation = () => {
  const navigate = useNavigate();
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

  function openApp(path) {
    setLoadingContext({
      loading: true,
      opening: true,
    });

    setTimeout(() => {
      navigate(path);

      setLoadingContext({
        loading: false,
        opening: true,
      });
    }, 1000);
  }

  if (loadingContext.loading) {
    return <LoadingScreen />;
  }

  return (
    <nav
      className={
        loadingContext.loading
          ? "loadingScreen"
          : loadingContext.opening
            ? "app-in-use"
            : "device-app"
      }
    >
      {loadingContext.loading ? (
        <LoadingScreen />
      ) : loadingContext.opening ? (
        <Outlet />
      ) : (
        navArray.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="screen-link"
            onClick={(event) => {
              openApp(item.path);
            }}
          >
            <div className="app-icon">
              <Icon iconName={item.icon} />
            </div>

            <span>{item.name}</span>
          </NavLink>
        ))
      )}
    </nav>
  );
};

export default Navigation;
