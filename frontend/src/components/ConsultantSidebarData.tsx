import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: "Inbox",
    path: "/consultant/inbox",
    icon: <BsIcons.BsInbox />,
    cName: "nav-text",
  },
  {
    title: "Current Timesheet",
    path: "/consultant/timesheet",
    icon: <BsIcons.BsCalendar3 />,
    cName: "nav-text",
  },
  {
    title: "Previous Timesheets",
    path: "/consultant/timesheetlist",
    icon: <GoIcons.GoChecklist />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <BsIcons.BsAndroid />,
    cName: "nav-text",
  },
];
