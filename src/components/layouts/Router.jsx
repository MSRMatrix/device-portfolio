import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import Hero from "./hero/Hero";
import AboutMe from "./aboutMe/AboutMe";
import Career from "./career/Career";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import ContactMe from "./contactMe/ContactMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "career",
        element: <Career />,
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
        path: "contact-me",
        element: <ContactMe />,
      },
    ],
  },
  {
    path: "*",
    element: <Dashboard />
  }
]);
