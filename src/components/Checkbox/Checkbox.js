const Checkbox = ({ id, checked, onCheckboxChange, disabled }) => {
  return (
    <div>
      <input
        disabled={disabled}
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onCheckboxChange}
      />
    </div>
  );
};

export default Checkbox;
