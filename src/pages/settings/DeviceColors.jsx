import { useContext } from "react";
import { DeviceColorContext } from "../../context/DeviceColorContext";

const DeviceColors = () => {
  const { deviceColorContext, setDeviceColorContext } =
    useContext(DeviceColorContext);
  const handleChange = (e) => {
    setDeviceColorContext((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="device-colors">
      <div className="device-color">
        <div className="device-color-info">
          <span className="device-color-name">Hintergrund</span>

          <span className="device-color-description">
            Hintergrundfarbe des Geräts
          </span>
        </div>

        <input
          name="device"
          type="color"
          className="device-color-input"
          onChange={handleChange}
        />
      </div>

      <div className="device-color">
        <div className="device-color-info">
          <span className="device-color-name">Rahmen</span>

          <span className="device-color-description">
            Farbe des Geräterahmens
          </span>
        </div>

        <input
          name="frame"
          type="color"
          className="device-color-input"
          onChange={handleChange}
        />
      </div>
      <div>
        <button
        disabled={!deviceColorContext.frame && !deviceColorContext.device}
          onClick={() => setDeviceColorContext({ device: null, frame: null })}
        >
          Standartfarben wiederherstellen
        </button>
      </div>
    </div>
  );
};

export default DeviceColors;
