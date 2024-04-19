import { useEffect, useState } from 'react';
import '../List.css';
import TimesheetMListItem from './TimesheetMListItem';
import * as BsIcons from 'react-icons/bs';
import { BASE_URL } from '../../app-state/api-components/api-url';
import { useSelector } from 'react-redux';
import { RootState, Timesheet } from '../../app-state/store';

function TimesheetMList() {
  const [query, setQuery] = useState('');
  const [query1, setQuery1] = useState('');
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const userToken = useSelector((state: RootState) => state.user.token);
  useEffect(() => {
    getAllNonApprovedTimesheets();
  }, []);

  const getAllNonApprovedTimesheets = async () => {
    try {
      const headers = { Authorisation: `Bearer ${userToken}` };
      const result = await fetch(`${BASE_URL}/api/timesheet/to-be-approved`, {
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
        <div className="list-search">
          <input
            className="list-search-input"
            type="search"
            id="search"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <BsIcons.BsSearch size={30} onClick={() => setQuery1(query)} />
          </button>
        </div>

        <div className="list-listgroup">
          {timesheets
            .filter((timesheet) => {
              return query1.toLowerCase() === ''
                ? timesheet
                : timesheet.id.toString().toLowerCase().includes(query1);
            })
            .map((timesheet, i) => (
              <TimesheetMListItem key={i} name={'Timesheet ' + timesheet.id.toString()} id={timesheet.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default TimesheetMList;
