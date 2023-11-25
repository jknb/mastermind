import "./CheckButton.css";

function CheckButton({ isClickable, onClick }) {
  return (
    <button
      className={`check-button ${
        isClickable ? "check-button-enabled" : "check-button-disabled"
      }`}
      onClick={isClickable ? onClick : undefined}
    >
      Check
    </button>
  );
}

export default CheckButton;
