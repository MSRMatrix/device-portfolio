import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

import { useState } from "react";

import { LoadingContext } from "./context/LoadingContext";

import "@/styles/globals.css";

import DeviceLayout from "./layouts/DeviceLayout";

import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Hobbies from "@/pages/Hobbies";
import Contact from "@/pages/Contact";
import Skills from "./pages/Skills";

function App() {
  const [loadingContext, setLoadingContext] = useState({loading: true, opening: false});
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
      ],
    },
    {
       path: "*",
      element: <DeviceLayout />,
    }
  ]);

  return (
    <>
      <LoadingContext.Provider value={{ loadingContext, setLoadingContext }}>
        <RouterProvider router={router} />
      </LoadingContext.Provider>
    </>
  );
}

export default App;
