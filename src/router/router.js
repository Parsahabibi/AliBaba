



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

import ListOfPassengers from "../components/ListOfPassengers/ListOfPassengers";
import Ticketing from "../components/Ticketing/Ticketing";
import HelpCenter from "../components/HelpCenter/HelpCenter";
import DesktopTicketingPage from "../pages/DesktopTicketingPage";
import Transactions from "../components/Transactions/Transactions";
import MyTrip from "../components/MyTrip/MyTrip";
import Passengers from "../components/Passengers/Passengers";
import DesktopTicketing from "../components/DesktopTicketing/DesktopTicketing";
import TransactionsDesktop from "../components/TransactionsDesktop/TransactionsDesktop";
import Loyalty from "../components/Loyalty/Loyalty";
import FlightPage from '../pages/FlightPage.jsx'
import AirplanOutSideDesktop from "../components/AirplaneOutSide/AirplaneOutSideDesktop";
import TrainDesktop from "../components/Train/TrainDesktop";
import HotelDesktop from "../components/Hotel/HotelDesktop";
import VilaDesktop from "../components/Vila/VilaDesktop";
import BusDesktop from "../components/Bus/BusDesktop";
import ThourDesktop from "../components/Thour/ThourDesktop";

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
        path: "/Account/DesktopTicketing",
        element: <DesktopTicketing />,
    },
    {
        path: "/Account/DesktopTransactions",
        element: <TransactionsDesktop />,
    },
    {
        path: "/Account/Loyalty",
        element: <Loyalty />,
    },
    {
        path: "/Account/HelpCenter",
        element: <HelpCenter />,
    },
    {
        path: "/flight",
        element: <FlightPage />,
    },
    {
        path: "/AirplanOutSide",
        element: <AirplanOutSide />,
    },
    {
        path: "/Train",
        element: <Train />,
    },
    {
        path: "/Hotel",
        element: <Hotel />,
    },
    {
        path: "/Vila",
        element: <Vila/>,
    },
    {
        path: "/Bus",
        element: <Bus />,
    },
    {
        path: "/Thour",
        element: <Thour />,
    },
])
export default router
