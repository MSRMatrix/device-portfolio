import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Hero, AboutMe, CareerHistory, Certificates, Projects, Skills, ContactMe } from "./components/layouts/MainSections";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/about-me",
          element: <AboutMe />,
        },
         {
          path: "/career-history",
          element: <CareerHistory />,
        },
         {
          path: "/certificates",
          element: <Certificates />,
        },
         {
          path: "/projects",
          element: <Projects />,
        },
         {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/contact-me",
          element: <ContactMe />,
        },
        
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
