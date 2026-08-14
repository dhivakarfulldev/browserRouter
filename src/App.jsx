import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Template from "./components/Template";
import WelcomeMsg from "./components/WelcomeMsg";
import Error from "./components/Error";
import "./App.css"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/welcome/:username",
          element: <WelcomeMsg />
        }
      ],
    },
    {
      path: "/*",
      element: <Error />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
