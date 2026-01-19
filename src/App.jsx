import "./App.css";
import {  RouterProvider } from "react-router-dom";
import { router } from "./components/layouts/Router";

function App() {
  
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
