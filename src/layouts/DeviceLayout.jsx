import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Device from "../components/Device";

const DeviceLayout = () => {
  return (
    <div className="device-layout">
      <Device>
        <Navigation />
      </Device>
    </div>
  );
};

export default DeviceLayout;
