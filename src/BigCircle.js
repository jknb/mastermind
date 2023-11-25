import { useEffect, useRef } from "react";
import ColorsGrid from "./ColorsGrid";

function BigCircle({
  index,
  size = "36px",
  setBigCirclesStatus,
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
        setBigCirclesStatus((prevStatus) => {
          return prevStatus.map((status) => ({ ...status, isGridOpen: false }));
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
  }, [isGridOpen, setBigCirclesStatus]);

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

  const onCircleClick = () => {
    setBigCirclesStatus((prevStatus) =>
      prevStatus.map((status, i) =>
        index === i
          ? { ...status, isGridOpen: !isGridOpen }
          : { ...status, isGridOpen: false }
      )
    );
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={circleStyle}
          onClick={isClickable ? onCircleClick : undefined}
        ></div>
        {isGridOpen && (
          <div ref={colorsGridRef}>
            <ColorsGrid
              onColorSelect={(color) => {
                setBigCirclesStatus((prevStatus) =>
                  prevStatus.map((el, i) =>
                    i === index ? { isGridOpen: false, selection: color } : el
                  )
                );
              }}
              backgroundColor={backgroundColor}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default BigCircle;
