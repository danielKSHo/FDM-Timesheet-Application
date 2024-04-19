import React, { useState } from 'react';

interface ClockButtonProps {
    // children: string;
    colour?:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark";
    className?: string;
    // onClick: () => void;
  }

  const ClockButton = ({
    // children,
    colour = "primary",
    className,
    // onClick,
  }: ClockButtonProps) => {
  const [clockStatus, setClockStatus] = useState<boolean>(false);

  const handleClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`Clicked at ${currentTime}`);
    setClockStatus(!clockStatus);
  };

  return (
    <>

    <button className={`btn btn-${colour} ${className}`} onClick={handleClick}>
      {/* {children} */}
      {clockStatus ? 'Clock Out' : 'Clock In'}
    </button>
    </>

    // <button onClick={handleClick}>
    //   {clockStatus ? 'Clock Out' : 'Clock In'}
    // </button>
  );
};

export default ClockButton;
