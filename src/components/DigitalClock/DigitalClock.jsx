import React, { useEffect, useState } from "react";
import { FaClock } from 'react-icons/fa';
import "./DigitalClock.css";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
    <p><FaClock/></p>
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
