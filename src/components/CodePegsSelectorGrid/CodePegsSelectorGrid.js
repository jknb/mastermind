import { useState } from "react";
import GridCircle from "./GridCircle";
import { COLORS } from "../../constants";
import "./CodePegsSelectorGrid.css";
import { useComponentListCreator } from "../../hooks/useComponentListCreator";
import { useAppStore } from "../../store";

function CodePegsSelectorGrid({ isOpen, onColorSelect, backgroundColor }) {
  const [color, setColor] = useState(backgroundColor);
  const numberOfColors = useAppStore((state) => state.settings.numberOfColors);

  const onGridCircleClick = (index) => {
    const selectedColor = COLORS[index];
    const newColor = color === selectedColor ? "white" : selectedColor;

    onColorSelect(newColor);
    setColor(newColor);
  };

  const gridCircles = useComponentListCreator(
    GridCircle,
    numberOfColors,
    (index) => ({
      size: "24px",
      backgroundColor: COLORS[index],
      onClick: () => onGridCircleClick(index),
    })
  );

  return (
    <>{isOpen && <div className="colors-grid-container">{gridCircles}</div>}</>
  );
}

export default CodePegsSelectorGrid;
