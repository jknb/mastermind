function KeyPeg({ size = "16px", backgroundColor, borderColor }) {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: `3px solid ${borderColor}`,
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

export default KeyPeg;
