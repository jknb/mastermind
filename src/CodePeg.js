import { useEffect, useRef } from "react";
import CodePegsSelectorGrid from "./ColorsGrid";

function CodePeg({
  index,
  size = "36px",
  setCodePegs,
  backgroundColor,
  isClickable,
  isGridOpen,
}) {
  const colorsGridRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        colorsGridRef.current &&
        !colorsGridRef.current.contains(event.target)
      ) {
        setCodePegs((codePegs) => {
          return codePegs.map((status) => ({ ...status, isGridOpen: false }));
        });
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
  }, [isGridOpen, setCodePegs]);

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

  const onCircleClick = () =>
    setCodePegs((codePegs) =>
      codePegs.map((status, i) => ({
        ...status,
        isGridOpen: index === i ? !isGridOpen : false,
      }))
    );

  const onColorSelect = (color) =>
    setCodePegs((codePegs) =>
      codePegs.map((el, i) =>
        i === index ? { isGridOpen: false, selection: color } : el
      )
    );

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={circleStyle}
          onClick={isClickable ? onCircleClick : undefined}
        ></div>
        {isGridOpen && (
          <div ref={colorsGridRef}>
            <CodePegsSelectorGrid
              onColorSelect={onColorSelect}
              backgroundColor={backgroundColor}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default CodePeg;
