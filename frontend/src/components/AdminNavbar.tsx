import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiICons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./AdminSidebarData";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
// useSelector
import { logout } from "../app-state/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../app-state/store";
import "./Navbar.css";

function AdminNavbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  // const userRole = useSelector()
  const userID = useSelector((state: RootState) => state.user.id);

  // const logoutHandler = (path) => {
  //   await dispatch(logout())
  // }

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className="user-info">ID: {userID}</h1>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiICons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (item.title === "logout") {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={""} onClick={() => dispatch(logout())}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminNavbar;
