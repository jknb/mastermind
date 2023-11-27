import KeyPeg from "./KeyPeg";
import "./KeyPegs.css";

function KeyPegs({ greenPegs, redPegs }) {
  return (
    <>
      <div className="keypeg-container">
        <div className="green-peg-container">
          <KeyPeg size="16px" backgroundColor="green" />
          <span className="pegs-result">:{greenPegs}</span>
        </div>
        <div className="red-peg-container">
          <KeyPeg size="16px" backgroundColor="red" />
          <span className="pegs-result">:{redPegs}</span>
        </div>
      </div>
    </>
  );
}

export default KeyPegs;
