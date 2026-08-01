import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Device from "../components/Device";
import { useState } from "react";
import { LoadingContext } from "../context/LoadingContext";

const DeviceLayout = () => {
  const [opening, setOpening] = useState(false);
    const [theme, setTheme] = useState("light");
  return (
    <div style={{height: "100%"}} className={theme}>
     <div className="device-layout">
      <Device setOpening={setOpening} theme={theme} setTheme={setTheme}>

        <Navigation opening={opening} setOpening={setOpening}/>
        
      </Device>
    </div>
</div>
    
   
  );
};

export default DeviceLayout;
