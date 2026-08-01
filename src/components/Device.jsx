import Camera from "./Camera";
import HomeIndicator from "./HomeIndicator";
import Staturbar from "./Statusbar";

const Device = ({ children, setOpening, theme, setTheme}) => {
  return (
    <div className="device">
      <Staturbar theme={theme} setTheme={setTheme}/>

      <div className="screen">{children}</div>
      
      <HomeIndicator setOpening={setOpening} />
    </div>
  );
};

export default Device;
