import { useNavigate } from "react-router-dom";
import "../../Navigation.css";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

function Employees() {
  const navigate = useNavigate();
  const onClientsClick = () => {
    const path = "/admin/employees/consultantlist";
    navigate(path);
  };
  const onLocationsClick = () => {
    const path = "/admin/employees/managerlist";
    navigate(path);
  };
  const onEmployeesClick = () => {
    const path = "/admin/employees/addemployee";
    navigate(path);
  };

  return (
    <>
      <div className="navigation-info">
        <div>Employees</div>
      </div>

      <div className="navigation-buttons">
        <button className="navigation-button1" onClick={onClientsClick}>
          <BsIcons.BsPersonSquare size={60} />
          <div>Consultants</div>
        </button>

        <button className="navigation-button3" onClick={onLocationsClick}>
          <MdIcons.MdManageAccounts size={65} />
          <div>Line Managers</div>
        </button>

        <button className="navigation-button2" onClick={onEmployeesClick}>
          <MdIcons.MdPersonAdd size={60} />
          <div>Add Employee</div>
        </button>
      </div>
    </>
  );
}

export default Employees;
