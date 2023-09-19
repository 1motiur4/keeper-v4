import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, Error, Notes, Profile } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
