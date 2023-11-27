import "./CheckButton.css";

function CheckButton({ isClickable, onClick }) {
  return (
    <button
      className={`check-button check-button-${
        isClickable ? "enabled" : "disabled"
      }`}
      onClick={isClickable ? onClick : undefined}
    >
      Check
    </button>
  );
}

export default CheckButton;
