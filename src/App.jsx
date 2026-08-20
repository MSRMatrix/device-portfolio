import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";

import "@/styles/globals.css";

import DeviceLayout from "./layouts/DeviceLayout";

import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Hobbies from "@/pages/Hobbies";
import Contact from "@/pages/Contact";
import Skills from "./pages/Skills";
import { AppContext } from "./context/AppContext";
import Settings from "./pages/Settings";
import Resume from "./pages/Resume";
import { BackgroundSettings } from "./context/BackgroundSettings";
import Background from "./pages/settings/Background";
import Color from "./pages/settings/Color";

function App() {
  const [appContext, setAppContext] = useState(false);

  const [background, setBackground] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DeviceLayout />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "hobbies",
          element: <Hobbies />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "settings",
          element: <Settings />,
          children: [
            {
              path: "background",
              element: <Background />,
            },
            {
              path: "color",
              element: <Color />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <DeviceLayout />,
    },
  ]);

  return (
    <>
      <BackgroundSettings.Provider value={{ background, setBackground }}>
        <AppContext.Provider value={{ appContext, setAppContext }}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </BackgroundSettings.Provider>
    </>
  );
}

export default App;
