import Camera from "./Camera";
import HomeIndicator from "./HomeIndicator";
import Staturbar from "./Statusbar";

const Device = ({ children, theme, setTheme}) => {
  return (
    <div className="device">
      <Staturbar theme={theme} setTheme={setTheme}/>

      <div className="screen">{children}</div>
      
      <HomeIndicator />
    </div>
  );
};

export default Device;
