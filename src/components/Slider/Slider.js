import { forwardRef, useState } from "react";

const Slider = forwardRef(function Slider(
  { id, initialValue, range = [0, 100] },
  ref
) {
  const [value, setValue] = useState(initialValue);
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const [minValue, maxValue] = range;
  return (
    <div>
      <input
        id={id}
        ref={ref}
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleSliderChange}
      />
      <label style={{ fontSize: "22px" }}>{value}</label>
    </div>
  );
});

export default Slider;
