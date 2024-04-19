import ReactDOM from "react-dom/client";
import LoginForm from "./pages/LoginForm";

import AdminNavbar from "./components/AdminNavbar";
import Admin from "./pages/admin/Admin";
import Clients from "./pages/admin/client/Clients";
import Locations from "./pages/admin/location/Locations";
import Employees from "./pages/admin/employee/Employees";
import ManagerList from "./pages/admin/employee/ManagerList";
import ConsultantAList from "./pages/admin/employee/ConsultantAList";
import AddEmployee from "./pages/admin/employee/AddEmployee";
import AddClientTag from "./pages/admin/client/AddClient";
import AddLocation from "./pages/admin/location/AddLocation";

import ConsultantMList from "./pages/manager/ConsultantMList";
import TimesheetMList from "./pages/manager/TimesheetMList";
import TimesheetM from "./pages/manager/TimesheetM";

import ConsultantNavbar from "./components/ConsulantNavbar";
import Consultant from "./pages/consultant/Consultant";
import Inbox from "./pages/consultant/Inbox";
import Timesheet from "./pages/consultant/Timesheet";
import TimesheetList from "./pages/consultant/TimesheetList";
import LogHours from "./pages/consultant/loghours";

import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";

import { store } from "./app-state/store";
import { Provider } from "react-redux";

const AdminSection = () => (
  <>
    <AdminNavbar />
    <Outlet />
  </>
);

const ConsultantSection = () => (
  <>
    <ConsultantNavbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  // First Page
  {
    path: "/",
    element: <LoginForm />,
  },
  // Admin Pages
  {
    element: <AdminSection />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/clients",
        element: <Clients />,
      },
      {
        path: "/admin/client/addclient",
        element: <AddClientTag />,
      },
      {
        path: "/admin/locations",
        element: <Locations />,
      },
      {
        path: "/admin/locations/addlocation",
        element: <AddLocation />,
      },
      {
        path: "/admin/employees",
        element: <Employees />,
      },
      {
        path: "/admin/employees/managerlist",
        element: <ManagerList />,
      },
      {
        path: "/admin/employees/consultantlist",
        element: <ConsultantAList />,
      },
      {
        path: "/admin/employees/addemployee",
        element: <AddEmployee />,
      },
    ],
  },
  // Manager Page
  {
    path: "/manager/consultant",
    element: <ConsultantMList />,
  },
  {
    path: "/manager/consultant/timesheetlist",
    element: <TimesheetMList />,
  },
  {
    path: "/manager/consultant/timesheetlist/timesheet",
    element: <TimesheetM />,
  },
  // Consultant Pages
  {
    element: <ConsultantSection />,
    children: [
      {
        path: "/consultant",
        element: <Consultant />,
      },
      {
        path: "/consultant/inbox",
        element: <Inbox />,
      },
      {
        path: "/consultant/timesheet",
        element: <Timesheet />,
      },
      {
        path: "/consultant/timesheetlist",
        element: <TimesheetList />,
      },
      {
        path: "/consultant/timesheet/loghours",
        element: <LogHours />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
