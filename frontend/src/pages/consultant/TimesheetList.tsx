import { useEffect, useState } from "react";
import "../List.css";
import TimesheetListItem from "./TimesheetListItem";
import { BASE_URL } from "../../app-state/api-components/api-url";
import { RootState, Timesheet } from "../../app-state/store";
import { useSelector } from "react-redux";

function TimesheetList() {
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const userToken = useSelector((state: RootState) => state.user.token);
  useEffect(() => {
    getAllTimesheets();
  }, []);

  const getAllTimesheets = async () => {
    try {
      const headers = { Authorisation: `Bearer ${userToken}` };
      const result = await fetch(`${BASE_URL}/api/timesheet/all`, {
        headers,
      });
      setTimesheets(await result.json());
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div className="list-info">
        <div>Timesheets</div>
      </div>
      <div className="list-listcontainer">
        <div className="list-listgroup">
          {timesheets.map((timesheet, i) => (
            <TimesheetListItem key={i} name={'Timesheet ' + timesheet.id.toString()} isChecked={timesheet.approve}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default TimesheetList;
