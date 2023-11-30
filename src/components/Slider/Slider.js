import { forwardRef, useState } from "react";

const Slider = forwardRef(function Slider(
  { id, value, range = [0, 100], onSliderChange, disabled },
  ref
) {
  const [minValue, maxValue] = range;
  return (
    <div>
      <input
        disabled={disabled}
        id={id}
        ref={ref}
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onSliderChange}
      />
      <label style={{ fontSize: "22px" }}>{value}</label>
    </div>
  );
});

export default Slider;
