function SmallCircle({ size = "16px", backgroundColor = "white" }) {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: "3px solid var(--small_circle__border_color)",
    background: backgroundColor,
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={circleStyle}></div>
      </div>
    </>
  );
}

export default SmallCircle;
