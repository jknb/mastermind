function GridCircle({ size = "24px", backgroundColor, onClick }) {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid var(--grid_circle__border_color)",
    background: backgroundColor,
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={circleStyle} onClick={onClick}></div>
      </div>
    </>
  );
}

export default GridCircle;
