import { useEffect, useRef, useState } from "react";
import CodePegsSelectorGrid from "../CodePegsSelectorGrid";

function CodePeg({
  index,
  size = "36px",
  setCodePegs,
  backgroundColor,
  isClickable,
}) {
  const [isGridOpen, setIsGridOpen] = useState(false);
  const colorsGridTriggerAreaRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        colorsGridTriggerAreaRef.current &&
        !colorsGridTriggerAreaRef.current.contains(event.target)
      ) {
        setIsGridOpen(false);
      }
    }

    if (isGridOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGridOpen]);

  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    cursor: isClickable ? "pointer" : "default",
    border: `3px solid ${
      backgroundColor === "white"
        ? "var(--big_circle__unfilled__border_color)"
        : "var(--big_circle__filled__border_color)"
    }`,
    background: backgroundColor,
  };

  const onCircleClick = () => setIsGridOpen(!isGridOpen);

  const onColorSelect = (color) => {
    setIsGridOpen(false);
    setCodePegs((codePegs) =>
      codePegs.map((pegColor, i) => (i === index ? color : pegColor))
    );
  };

  return (
    <>
      <div ref={colorsGridTriggerAreaRef} style={{ position: "relative" }}>
        <div
          style={circleStyle}
          onClick={isClickable ? onCircleClick : undefined}
        ></div>
        <CodePegsSelectorGrid
          isOpen={isGridOpen}
          onColorSelect={onColorSelect}
          backgroundColor={backgroundColor}
        />
      </div>
    </>
  );
}

export default CodePeg;
