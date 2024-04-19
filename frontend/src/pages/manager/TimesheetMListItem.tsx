import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import * as BsIcons from 'react-icons/bs';
import TimesheetApproved from './TimesheetApproved';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app-state/store';
import { BASE_URL } from '../../app-state/api-components/api-url';

interface TimesheetMItemProps {
  name: string;
  id: number;
}

const TimesheetMListItem = ({ name, id }: TimesheetMItemProps) => {
  const [isApproved, setIsApproved] = useState(false);
  const userToken = useSelector((state: RootState) => state.user.token);
  console.log(isApproved);
  useEffect(() => {
    handleTimesheetApproved();
  }, [isApproved]);

  const handleTimesheetApproved = async () => {
    if (isApproved != true) {
    } else {
      try {
        const headers = { Authorisation: `Bearer ${userToken}` };
        const result = await fetch(`${BASE_URL}/api/timesheet/approve/${id}`, {
          method: 'PUT',
          headers,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCheckboxChange = () => {
    if (isApproved === false) {
      alert(
        'You are now approving a timeSheet and you CANNOT UNDO THIS ACTION'
      );
    }
    setIsApproved(!isApproved);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/manager/consultant/timesheetlist/timesheet';
    navigate(path);
  };
  return (
    <>
      <div className="list-listitem">
        <div className="list-node">
          <BsIcons.BsPersonSquare size={35} />
          {name}
        </div>

        <div className="list-buttons">
          <Button colour="dark" onClick={routeChange}>
            View
          </Button>
        </div>

        <div className="list-node">
          <input type="checkbox" onChange={handleCheckboxChange} />
          <TimesheetApproved name="Approve" isChecked={isApproved} />
          {/* {isApproved ? 'Approved' : 'Waiting to approve'} */}
        </div>
      </div>
    </>
  );
};

export default TimesheetMListItem;
