import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

import BookLayout from "@/layouts/BookLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Hobbies from "@/pages/Hobbies";
import Contact from "@/pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
