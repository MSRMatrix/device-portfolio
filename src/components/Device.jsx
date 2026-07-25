import HomeIndicator from "./HomeIndicator";

const Device = ({ children, setOpening }) => {
  return (
    <div className="device">
      {children}

      <HomeIndicator setOpening={setOpening} />
    </div>
  );
};

export default Device;
