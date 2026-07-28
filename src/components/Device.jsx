import HomeIndicator from "./HomeIndicator";

const Device = ({ children, setOpening }) => {
  return (
    <div className="device">
      <div className="camera"></div>

      <div className="screen">{children}</div>

      <HomeIndicator setOpening={setOpening} />
    </div>
  );
};

export default Device;
