import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Co2ImageTrack from "./components/app/co2imagetrack";
import Co2RealtimeTrack from "./components/app/co2realtimetrack";
import Layout from "./components/app/layout";
import NotFound from "./pages/404";
import Home from "./pages/landing";
import { store } from "./rtk/store";
import MyCo2Track from "./components/app/myco2track";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "co2track",
    element: <Layout />,
    children: [
      {
        path: "realtime",
        element: <Co2RealtimeTrack />,
      },
      {
        path: "image",
        element: <Co2ImageTrack />,
      },
      {
        path: "myco2",
        element: <MyCo2Track />,
      },
    ],
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
