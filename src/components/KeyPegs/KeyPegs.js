import KeyPeg from "./KeyPeg";
import "./KeyPegs.css";

function KeyPegs({ exactMatchPegs, colorMatchPegs }) {
  return (
    <>
      <div className="keypeg-container">
        <div className="exact-match-peg-container">
          <KeyPeg size="16px" backgroundColor="black" borderColor="white" />
          <span className="pegs-result">:{exactMatchPegs}</span>
        </div>
        <div className="color-match-peg-container">
          <KeyPeg size="16px" backgroundColor="white" borderColor="black" />
          <span className="pegs-result">:{colorMatchPegs}</span>
        </div>
      </div>
    </>
  );
}

export default KeyPegs;
