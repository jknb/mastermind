import { useState } from "react";
import GridCircle from "./GridCircle";
import { COLORS } from "./constants";
import "./ColorsGrid.css";
import { useComponentListCreator } from "./hooks/useComponentListCreator";

function CodePegsSelectorGrid({ onColorSelect, backgroundColor }) {
  const [color, setColor] = useState(backgroundColor);

  const onGridCircleClick = (index) => {
    const selectedColor = COLORS[index];
    const newColor = color === selectedColor ? "white" : selectedColor;

    onColorSelect(newColor);
    setColor(newColor);
  };

  const gridCircles = useComponentListCreator(GridCircle, 9, (index) => ({
    size: "24px",
    backgroundColor: COLORS[index],
    onClick: () => onGridCircleClick(index),
  }));

  return <div className="colors-grid-container">{gridCircles}</div>;
}

export default CodePegsSelectorGrid;
