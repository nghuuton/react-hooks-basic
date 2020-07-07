import { useEffect, useState } from "react";

function formatDate(date) {
  if (!date) return null;
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
  const [timeSring, setTimeSring] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeSring(newTimeString);
    }, 1000);
    // ! Khi sử dụng setInterval phải clearInterval khi UNMOUT COMPONENT
    return () => {
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);
  return { timeSring };
}

useClock.propTypes = {};

export default useClock;
