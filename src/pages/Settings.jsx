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

  <nav className="settings-navigation">
    {navArray.map((item) => (
      <button
        key={item.id}
        className="settings-item"
        onClick={() => navigate(item.path)}
      >
        {item.name}
      </button>
    ))}
  </nav>

  <div className="settings-content">
    <Outlet />
  </div>

</section>
  );
};

export default Settings;