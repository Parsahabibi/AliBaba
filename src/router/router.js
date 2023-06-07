import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HintInstall from "../pages/HintInstall";
import MobileAccount from "../pages/MobileAccount";
import EditAccount from "../pages/EditAccount";
import Information from "../pages/Information";
import EditNumber from "../pages/EditNumber";
import Accounts from "../pages/Accounts";
import EmailsAccount from "../pages/EmailsAccount";
import EditUsersName from "../pages/EditUsersName";
import BankInformation from "../pages/BankInformation";
import AirplanOutSide from "../pages/AirplanOutSide";
import Vila from "../pages/Vila";
import BashgahMoshtarian from "../pages/BashgahMoshtarian";
import Hotel from "../pages/Hotel";
import Train from "../pages/Train";
import Bus from "../pages/Bus";
import Thour from "../pages/Thour";
import DesktopAccounts from "../pages/DesktopAccounts";
import CustomerClub from "../components/CustomerClub/CustomerClub";
import Search from "../pages/Search";
import WhyAlibaba from "../pages/WhyAlibaba";
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
  {
    path: "/Account",
    element: <Accounts />,
  },
  {
    path: "/EditAccount",
    element: <EditAccount />,
  },
  {
    path: "/EditAccount/Information",
    element: <Information />,
  },
  {
    path: "/EditAccount/EditNumber",
    element: <EditNumber />,
  },
  {
    path: "/EditAccount/EmailAccount",
    element: <EmailsAccount />,
  },
  {
    path: "/EditAccount/EditUserName",
    element: <EditUsersName />,
  },
  {
    path: "/EditAccount/BankInformation",
    element: <BankInformation />,
  },
  {
    path: "/Account/Profile",
    element: <DesktopAccounts />,
  },
  {
    path: "/Account/CustomerClub",
    element: <CustomerClub />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
  {
    path: "/WhyAlibaba",
    element: <WhyAlibaba />,
  },
]);

export default router;
