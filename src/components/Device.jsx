import Camera from "./Camera";
import HomeIndicator from "./HomeIndicator";
import Staturbar from "./Statusbar";

const Device = ({ children, setOpening }) => {
  return (
    <div className="device">
      <Camera />
      <Staturbar />

      <div className="screen">{children}</div>
      
      <HomeIndicator setOpening={setOpening} />
    </div>
  );
};

export default Device;
