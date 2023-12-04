const Slider = ({ id, value, range = [0, 100], onSliderChange, disabled }) => {
  const [minValue, maxValue] = range;
  return (
    <div>
      <input
        disabled={disabled}
        id={id}
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onSliderChange}
      />
      <label style={{ fontSize: "22px" }}>{value}</label>
    </div>
  );
};

export default Slider;
