import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as BsIcons from "react-icons/bs";
interface TimesheetItemProps {
  name: string;
  isChecked: boolean
}

const TimesheetListItem = ({ name, isChecked }: TimesheetItemProps) => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/consultant/timesheet";
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

          {isChecked ? <span>Status: Approved</span> : <span>Status: Not Approved</span>}
        
{/* 
          <TimesheetApproved name="Approve" isChecked={isApproved} /> */}
        
          <Button colour="success" onClick={routeChange}>
            View
          </Button>
        </div>
      </div>
    </>
  );
};
export default TimesheetListItem;
