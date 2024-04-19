// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TimesheetM.css";
import Button from "../../components/Button";
// import LogHoursBar from "../../components/LogHoursBar";
// import { BsCalendar2Check } from "./BsCalendar2Check";
// import { PatternDiagonal } from "./PatternDiagonal";

export default function TimesheetM() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/manager/consultant/timesheetlist";
    navigate(path);
  };

  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="grid-container">
      <div className="timesheet-tile">
        <div className="timesheet-info">
          <div>Hours Worked: 35</div>
        </div>
        <div className="timesheet-dates">
          <div></div>
          <div>11/03/24</div>
          <div>12/03/24</div>
          <div>13/03/24</div>
          <div>14/03/24</div>
          <div>15/03/24</div>
          <div>16/03/24</div>
          <div>17/03/24</div>
        </div>
        <div className="timesheet-days">
          <div className="blank"></div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className="timesheet-times">
          <div>08:00</div>
          <div>09:00</div>
          <div>10:00</div>
          <div>11:00</div>
          <div>12:00</div>
          <div>13:00</div>
          <div>14:00</div>
          <div>15:00</div>
          <div>16:00</div>
          <div>17:00</div>
          <div>18:00</div>
        </div>
        <div className="timesheet-buttons">
          <Button colour="success" onClick={routeChange}>
            Approve
          </Button>
        </div>
      </div>
      {/* {alertVisible && (
        <div className="logHours-tile">
          <LogHours />
        </div>
      )} */}
    </div>
  );
}
