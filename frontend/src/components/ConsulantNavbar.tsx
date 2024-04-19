import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiICons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./ConsultantSidebarData";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { RootState } from "../app-state/store";
import "./Navbar.css";

function ConsultantNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const userID = useSelector((state: RootState) => state.user.id);

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

export default ConsultantNavbar;
