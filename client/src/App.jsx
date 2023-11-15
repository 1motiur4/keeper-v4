import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, Error, Notes, Profile } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    action: () => {
      console.log("test");
      return null;
    },
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
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
      />
    </>
  );
}

export default App;
