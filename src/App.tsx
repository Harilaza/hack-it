import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/landing";
import Detection from "./components/Detection";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <Detection />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
