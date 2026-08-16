import { useState } from "react";
import Camera from "./Camera";
import HomeIndicator from "./HomeIndicator";
import Staturbar from "./Statusbar";

const Device = ({ children, theme, setTheme, intro }) => {
  const [test, setTest] = useState(true);
  setTimeout(() => {
    setTest(false);
  }, 100);
  return (
    <div className="device" style={{ background: test ? "black" : "" }}>
      <Staturbar theme={theme} setTheme={setTheme} intro={intro} />

      <div className="screen">{children}</div>
      {intro ? <></> : <HomeIndicator />}
    </div>
  );
};

export default Device;
