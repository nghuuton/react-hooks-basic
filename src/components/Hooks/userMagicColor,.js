import { useEffect, useState, useRef } from "react";

function ramdomColor(currentColor) {
  const LIST_COLOR = ["red", "deeppink", "yellow", "green"];
  const currentIndex = LIST_COLOR.indexOf(currentColor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  return LIST_COLOR[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  useEffect(() => {
    const colorinterval = setInterval(() => {
      const newColor = ramdomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorinterval);
    };
  }, []);
  return { color };
}

export default useMagicColor;
