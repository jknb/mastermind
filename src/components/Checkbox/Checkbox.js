import { forwardRef, useState } from "react";

const Checkbox = forwardRef(function Checkbox({ id, initialValue }, ref) {
  const [value, setValue] = useState(initialValue);
  const handleCheckboxChange = (event) => {
    setValue(event.target.checked);
  };

  console.log("vao", value);
  return (
    <div>
      <input
        id={id}
        ref={ref}
        type="checkbox"
        checked={value}
        onChange={handleCheckboxChange}
      />
    </div>
  );
});

export default Checkbox;
