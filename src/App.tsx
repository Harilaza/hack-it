import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Detection from "./components/Detection";
import NotFound from "./pages/404";
import Home from "./pages/landing";
import { store } from "./rtk/store";
import MyCO2 from "./components/MyCO2";

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
  {
    path: "/myco2",
    element: <MyCO2 />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
