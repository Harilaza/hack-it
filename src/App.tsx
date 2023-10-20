import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Detection from "./components/Detection";
import NotFound from "./pages/404";
import Home from "./pages/landing";
import { store } from "./rtk/store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
