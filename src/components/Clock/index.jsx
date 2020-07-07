import React from "react";
import useClock from "../Hooks/useClock";
import "./Clock.scss";
function Clock() {
  const { timeSring, Time } = useClock();
  return (
    <div className="clock">
      <p className="clock__Title" style={{ fontSize: "42px" }}>
        {timeSring}
      </p>
    </div>
  );
}

Clock.propTypes = {};

export default Clock;
