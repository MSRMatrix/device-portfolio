import { Outlet, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const navArray = [
    {
      id: 1,
      name: "Hintergrund Einstellungen",
      path: "background",
    },
    {
      id: 2,
      name: "Handyfarben anpassen",
      path: "color",
    },
  ];

  return (
    <section className="settings-app">
      <div className="settings-navigation">
        {navArray.map((item) => (
          <div
            key={item.id}
            className="settings-item"
            onClick={() => navigate(item.path)}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="settings-content">
        <Outlet />
      </div>
    </section>
  );
};

export default Settings;