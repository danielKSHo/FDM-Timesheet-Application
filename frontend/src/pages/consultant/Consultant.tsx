import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";
import "../Navigation.css";

function Consultant() {
  const navigate = useNavigate();
  const onClientsClick = () => {
    const path = "/consultant/inbox";
    navigate(path);
  };
  const onLocationsClick = () => {
    const path = "/consultant/timesheet";
    navigate(path);
  };
  const onEmployeesClick = () => {
    const path = "/consultant/timesheetlist";
    navigate(path);
  };

  return (
    <>
      <div className="navigation-info">
        <div>Consultant</div>
      </div>

      <div className="navigation-buttons">
        <button className="navigation-button1" onClick={onClientsClick}>
          <BsIcons.BsInbox size={60} />
          <div>Inbox</div>
        </button>

        <button className="navigation-button2" onClick={onLocationsClick}>
          <BsIcons.BsCalendar3 size={60} />
          <div>Current Timesheet</div>
        </button>

        <button className="navigation-button3" onClick={onEmployeesClick}>
          <GoIcons.GoChecklist size={60} />
          <div>Previous Timesheets</div>
        </button>
      </div>
    </>
  );
}

export default Consultant;
