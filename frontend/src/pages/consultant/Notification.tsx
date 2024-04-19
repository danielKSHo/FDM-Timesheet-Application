import Button from "../../components/Button";
import * as BsIcons from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NotificationProps {
  name: string;
}

const Notification = ({ name }: NotificationProps) => {
  const navigate = useNavigate();
  const [showLogHoursButton, setShowLogHoursButton] = useState(false);

  const routeChange = () => {
    const path = "/consultant/timesheet/loghours";
    navigate(path);
  };
  const viewNotification = () => {
    // Alert user about the notification
    alert("Forgot to clock out. Please log hours timesheet.");
    // Show Log Hours button
    setShowLogHoursButton(true);
  };
  return (
    <>
      <div className="list-listitem">
        <div className="list-node">
          <BsIcons.BsPersonSquare size={35} />
          {name}
        </div>

        <div className="list-buttons">
          <Button colour="success" onClick={viewNotification}>
            View
          </Button>
          {/* Conditionally render Log Hours button */}
          {showLogHoursButton && (
            <Button colour="warning" onClick={routeChange}>
              Log Hours
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Notification;
