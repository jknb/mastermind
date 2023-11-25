import { useState } from "react";
import GridCircle from "./GridCircle";
import { repeatComponent } from "./utils";
import { COLORS } from "./constants";
import "./ColorsGrid.css";

function ColorsGrid({ onColorSelect, backgroundColor }) {
  const [color, setColor] = useState(backgroundColor);

  const onGridCircleClick = (index) => {
    const newColor = color === COLORS[index] ? "white" : COLORS[index];
    onColorSelect(newColor);
    setColor(newColor);
  };

  const gridCircles = repeatComponent(GridCircle, 9, (index) => ({
    size: "24px",
    backgroundColor: COLORS[index],
    onClick: () => onGridCircleClick(index),
  }));

  return <div className="colors-grid-container">{gridCircles}</div>;
}

export default ColorsGrid;
