import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogHours.css";
import Button from "../../components/Button";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

// Import your Button component here

export default function LogHours() {
  const navigate = useNavigate();

  const addTimeblock = () => {
    // pass
  };

  const toTimesheet = () => {
    const path = "/consultant/timesheet";
    navigate(path);
  };

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }

  function getDateUS() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [logHours, setLogHours] = useState(0);

  const handleSubmit = () => {
    if (startTime && endTime) {
      const difference = endTime.getTime() - startTime.getTime();
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const totalMinutes = Math.floor(difference / (1000 * 60));
      const minutes = totalMinutes - hours * 60;
      alert(
        "Selected Start Time: " +
          startTime.toLocaleTimeString() +
          "\nSelected End Time: " +
          endTime.toLocaleTimeString() +
          "\n" +
          hours +
          " hours " +
          minutes +
          " minutes"
      );
      setLogHours(hours);
    } else {
      alert("Please select both start and end times.");
    }
  };

  // const [time, setTime] = useState("20:00");
  // const onChange = (value) => {
  //   setTime(value);
  // };

  const minTime: Date = new Date(getDateUS() + " 08:00");
  const maxTime: Date = new Date(getDateUS() + "18:00");

  return (
    <div className="logHours-tile">
      {/* onSubmit={handleSubmit} */}
      <div className="logHours-info">
        <div>Day: {getDate()}</div>
        <div>Hours Worked: {logHours}</div>
      </div>
      <div className="logHours-content">
        <div className="logHours-node">
          <div>Start:</div>
          <TimePickerComponent
            placeholder="Select a time"
            value={startTime}
            onChange={(args: any) => setStartTime(args.value)}
            min={minTime}
            max={maxTime}
            format="HH:mm"
            step={15}
          />
        </div>

        <div className="logHours-node">
          <div>End:</div>
          <TimePickerComponent
            placeholder="Select a time"
            value={endTime}
            onChange={(args: any) => setEndTime(args.value)}
            min={minTime}
            max={maxTime}
            format="HH:mm"
            step={15}
          />
        </div>
      </div>

      <div className="logHours-content">
        <div className="logHours-node" style={{ color: "#65ADED" }}>
          <div>Client:</div>
          <div>
            <select id="type" name="type">
              <option></option>
              <option>HSBC</option>
              <option>DWP</option>
              <option>Lloyds Banking Group</option>
              <option>Sky</option>
              <option>Shell</option>
            </select>
          </div>
        </div>

        <div className="logHours-node" style={{ color: "#6E25BD" }}>
          <div>Location:</div>
          <div>
            <select id="type" name="type">
              <option></option>
              <option>Cottons Centre, London Bridge, UK</option>
              <option>Queens Road, Brighton, UK</option>
              <option>Whitehall Riverside, Leeds, UK</option>
              <option>Mainzer Landstraße, Frankfurt, Germany</option>
              <option>Beach Road, South Beach Tower, Singapore</option>
              <option>Fairmont House, Admiralty, Hong Kong</option>
            </select>
          </div>
        </div>

        <div className="logHours-node" style={{ color: "#8C43DB" }}>
          <div>Custom:</div>
          <div>
            <select id="type" name="type">
              <option></option>
              <option>Meeting</option>
              <option>Break</option>
              <option>Overtime</option>
              <option>Special Event</option>
            </select>
          </div>
        </div>
      </div>

      <div className="logHours-comment">
        <div>Add Comment</div>
        <textarea />
      </div>

      <div className="logHours-buttons">
        {/* You need to replace Button component with your actual implementation */}
        <Button colour="primary" onClick={addTimeblock}>
          Add Timeblock
        </Button>
        <Button colour="primary" onClick={handleSubmit}>
          Get Time
        </Button>
        <Button colour="secondary" onClick={toTimesheet}>
          Back to Timesheet
        </Button>
      </div>
    </div>
  );
}
