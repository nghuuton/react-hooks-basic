import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

function getRamdomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const ramdomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[ramdomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialValue = localStorage.getItem("color") || "deeppink";
    return initialValue;
  });
  function handleChangeColor() {
    const newColor = getRamdomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <div className="color-box__overlay">
        <button
          className="color-box__overlay__action"
          onClick={handleChangeColor}
        >
          Change
        </button>
      </div>
    </div>
  );
}

ColorBox.propTypes = {};

export default ColorBox;
