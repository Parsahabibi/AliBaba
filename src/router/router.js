import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HintInstall from "../pages/HintInstall";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Install",
        element: <HintInstall />,
    },
]);
export default router