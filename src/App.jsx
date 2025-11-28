import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from './components/Dashboard'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children:[

      ]
    }
  ])
  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
