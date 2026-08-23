const DeviceColors = () => {
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

  };

  return (
    <div className="device-colors">
      <div className="device-color">
        <div className="device-color-info">
          <span className="device-color-name">
            Hintergrund
          </span>

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
          <span className="device-color-name">
            Rahmen
          </span>

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
    </div>
  );
};

export default DeviceColors;