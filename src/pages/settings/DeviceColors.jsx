const DeviceColors = () => {
// Hier muss styled angewendet werden über die klasse device

  return (
    <div className="device-colors">
      <label>
        Hintergrund
        <input
          type="color"
        />
      </label>

      <label>
        Rahmen
        <input
          type="color"
        />
      </label>
    </div>
  );
};

export default DeviceColors;
