import { useNavigate } from "react-router-dom";
import "../Navigation.css";
import * as BsIcons from "react-icons/bs";

function Admin() {
  const navigate = useNavigate();
  const onClientsClick = () => {
    const path = "/admin/clients";
    navigate(path);
  };
  const onLocationsClick = () => {
    const path = "/admin/locations";
    navigate(path);
  };
  const onEmployeesClick = () => {
    const path = "/admin/employees";
    navigate(path);
  };

  return (
    <>
      <div className="navigation-info">
        <div>Admin</div>
      </div>

      <div className="navigation-buttons">
        <button className="navigation-button2" onClick={onClientsClick}>
          <BsIcons.BsPersonVcard size={65} />
          <div>Clients</div>
        </button>

        <button className="navigation-button1" onClick={onLocationsClick}>
          <BsIcons.BsCardImage size={60} />

          <div>Locations</div>
        </button>

        <button className="navigation-button3" onClick={onEmployeesClick}>
          <BsIcons.BsPersonLinesFill size={60} />

          <div>Employees</div>
        </button>
      </div>
    </>
  );
}

export default Admin;
