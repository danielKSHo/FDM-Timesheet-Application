import * as React from "react";
import "../List.css";
import Notification from "./Notification";

const notifications = Array.from({ length: 20 }, (_, index) => ({
  name: `Notification ${index + 1}`,
}));

function Inbox() {
  return (
    <>
      <div className="list-info">
        <div>Inbox</div>
      </div>
      <div className="list-listcontainer">
        <div className="list-listgroup">
          {notifications.map((consultant, index) => (
            <Notification key={index} name={consultant.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Inbox;
