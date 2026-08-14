import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Device from "../components/Device";
import { useEffect, useState } from "react";
import Intro from "../components/Intro";

const DeviceLayout = () => {
  const [theme, setTheme] = useState("dark");
  const [intro, setIntro] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIntro(false);
  }, 12000);

  return () => clearTimeout(timer);
}, []);

  return (
    <div style={{ height: "100%" }} className={theme}>
      <div className="device-layout">
        <Device theme={theme} setTheme={setTheme} intro={intro}>
          {intro ? (
            <Intro />
          ) : (
            <div className="app-content">
              <Outlet />
              <Navigation />
            </div>
          )}
        </Device>
      </div>
    </div>
  );
};

export default DeviceLayout;
