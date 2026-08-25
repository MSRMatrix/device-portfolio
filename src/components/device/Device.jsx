import { useContext, useState } from "react";
import Camera from "./Camera";
import HomeIndicator from "./HomeIndicator";
import Staturbar from "./Statusbar";
import { DeviceColorContext } from "../../context/DeviceColorContext";

const Device = ({ children, theme, setTheme, intro }) => {
  const { deviceColorContext, setDeviceColorContext } =
    useContext(DeviceColorContext);
  const [test, setTest] = useState(true);
  setTimeout(() => {
    setTest(false);
  }, 100);
  // useState Namen Test ändern
  return (
    <div className="device" style={{ background: test ? "black" : deviceColorContext.device ? deviceColorContext.device : "", border: deviceColorContext.frame ? `10px solid ${deviceColorContext.frame}` : "" }}>
      <Staturbar theme={theme} setTheme={setTheme} intro={intro} />

      <div className="screen">{children}</div>
      {intro ? <></> : <HomeIndicator />}
    </div>
  );
};

export default Device;
