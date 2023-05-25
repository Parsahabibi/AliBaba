import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HintInstall from "../pages/HintInstall";
import AirplanOutSide from "../pages/AirplanOutSide";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Install",
    element: <HintInstall />,
  },
  {
    path: "/AirplanOutSide",
    element: <AirplanOutSide />,
  },
]);
export default router