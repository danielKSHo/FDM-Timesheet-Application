import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import * as BsIcons from "react-icons/bs";

interface ClientProps {
  name: string;
}

const Client = ({ name }: ClientProps) => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/admin/clients";
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
        </div>
      </div>
    </>
  );
};

export default Client;
