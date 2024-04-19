import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as BsIcons from "react-icons/bs";

interface ConsultantListItemProps {
  name: string;
}

const ConsultantListItem = ({ name }: ConsultantListItemProps) => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/manager/consultant/timesheetlist";
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
      </div>
    </>
  );
};

export default ConsultantListItem;
