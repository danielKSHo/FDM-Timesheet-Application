import { useState } from 'react';

interface TimesheetApproved {
  name: string;
  isChecked: boolean;
}

const TimesheetApproved = ({ name, isChecked }: TimesheetApproved) => {
  const [isCheckeds, setIsChecked] = useState(false); // State to manage checkbox
  console.log(isChecked)

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    isChecked = newCheckedState; // Toggle the state when checkbox is clicked
  };

  return (
    <>
      {/* <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> */}
      {isChecked ? <>Approved</> : 'Waiting to approve'}

    </>
  );
};
export default TimesheetApproved;
