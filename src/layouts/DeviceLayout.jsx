import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Device from "../components/Device";
import { useState } from "react";
import { LoadingContext } from "../context/LoadingContext";

const DeviceLayout = () => {
  const [opening, setOpening] = useState(false);
  return (
    
     <div className="device-layout">
      <Device setOpening={setOpening}>

        <Navigation opening={opening} setOpening={setOpening}/>
        
      </Device>
    </div>

    
   
  );
};

export default DeviceLayout;
