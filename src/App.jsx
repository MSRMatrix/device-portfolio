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
import { MusicContext } from "./context/MusicContext";

function App() {
  const [loadingContext, setLoadingContext] = useState(false);
  const [musicContext, setMusicContext] = useState(null);
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
    <MusicContext.Provider value={{musicContext, setMusicContext}}>
      <LoadingContext.Provider value={{ loadingContext, setLoadingContext }}>
        <RouterProvider router={router} />
      </LoadingContext.Provider>
      </MusicContext.Provider>
    </>
  );
}

export default App;
