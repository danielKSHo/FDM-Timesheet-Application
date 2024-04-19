import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import * as BsIcons from "react-icons/bs";

interface ManagerListItemProps {
  name: string;
}

const ManagerListItem = ({ name }: ManagerListItemProps) => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "";
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
          <Button colour="success" onClick={routeChange}>
            View
          </Button>
          <Button colour="warning" onClick={routeChange}>
            Edit
          </Button>
        </div>
      </div>
    </>
  );
};

export default ManagerListItem;
