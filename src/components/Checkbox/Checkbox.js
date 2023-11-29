import { forwardRef, useState } from "react";

const Checkbox = forwardRef(function Checkbox(
  { id, checked, onCheckboxChange, disabled },
  ref
) {
  return (
    <div>
      <input
        disabled={disabled}
        id={id}
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onCheckboxChange}
      />
    </div>
  );
});

export default Checkbox;
