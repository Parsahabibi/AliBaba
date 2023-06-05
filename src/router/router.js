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
import DesktopAccounts from "../pages/DesktopAccounts";
import CustomerClub from "../components/CustomerClub/CustomerClub";
import ListOfPassengers from "../components/ListOfPassengers/ListOfPassengers";
import Ticketing from "../components/Ticketing/Ticketing";
import HelpCenter from "../components/HelpCenter/HelpCenter";
import DesktopTicketingPage from "../pages/DesktopTicketingPage";
import Transactions from "../components/Transactions/Transactions";
import MyTrip from "../components/MyTrip/MyTrip";
import Passengers from "../components/Passengers/Passengers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/AirplanOutSide",
        element: <AirplanOutSide />,
    },
    {
        path: "/Install",
        element: <HintInstall />,
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
        path: "/Account/ListOfPassengers",
        element: <ListOfPassengers />,
    },
    {
        path: "/Account/Ticketing",
        element: <Ticketing />,
    },
    {
        path: "/Account/DesktopTicketing",
        element: <DesktopTicketingPage />,
    },
    {
        path: "/Account/Transactions",
        element: <Transactions />,
    },
    {
        path: "/Account/MyTrip",
        element: <MyTrip />,
    },
    {
        path: "/Account/Passengers",
        element: <Passengers />,
    },
    {
        path: "/Account/HelpCenter",
        element: <HelpCenter />,
    },
])
export default router
