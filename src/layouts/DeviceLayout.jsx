import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Device from "../components/Device";
import { useState } from "react";
import { LoadingContext } from "../context/LoadingContext";

const DeviceLayout = () => {
    const [theme, setTheme] = useState("dark");
  return (
    <div style={{height: "100%"}} className={theme}>
     <div className="device-layout">
      <Device theme={theme} setTheme={setTheme}>

        <Navigation/>
        
      </Device>
    </div>
</div>
    
   
  );
};

export default DeviceLayout;
