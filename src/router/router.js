import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HintInstall from "../pages/HintInstall";
import AirplanOutSide from "../pages/AirplanOutSide";
import Vila from "../pages/Vila";
import BashgahMoshtarian from "../pages/BashgahMoshtarian";
import Hotel from "../pages/Hotel";
import { Tour } from "../components/icons/Icons";
import Train from "../pages/Train";
import Bus from "../pages/Bus";
import Thour from "../pages/Thour";
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
  {
    path: "/Vila",
    element: <Vila />,
  },
  {
    path: "/BashgahMoshtarian",
    element: <BashgahMoshtarian />,
  },
  {
    path: "/Hotel",
    element: <Hotel />,
  },
  {
    path: "/Thour",
    element: <Thour />,
  },
  {
    path: "/Train",
    element: <Train />,
  },
  {
    path: "/Bus",
    element: <Bus />,
  },
]);
export default router;
