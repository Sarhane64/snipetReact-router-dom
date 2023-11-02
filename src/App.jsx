import { createBrowserRouter,RouterProvider } from "react-router-dom";
import axios from "axios"

import Home from "./pages/Home";
import About from "./pages/About";
import BeforeAbout from "./pages/BeforeAbout";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
      loader: async() => {
        return await axios.get("http://localhost:3000/people")
        .then(res => res.data)
      }
    },
    {
      path: "/about/:id",
      element: <BeforeAbout />,
      loader: async({params}) => {
        return await axios.get(`http://localhost:3000/people/${params.id}`)
        .then(res => res.data)
      }
    },

  ])

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
};

export default App;