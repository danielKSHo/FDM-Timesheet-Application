import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Clients",
    path: "/admin/clients",
    icon: <BsIcons.BsPersonSquare />,
    cName: "nav-text",
  },
  {
    title: "Locations",
    path: "/admin/locations",
    icon: <BsIcons.BsCardImage />,
    cName: "nav-text",
  },
  {
    title: "Employees",
    path: "/admin/employees",
    icon: <BsIcons.BsPersonLinesFill />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <BsIcons.BsAndroid />,
    cName: "nav-text",
  }
];
