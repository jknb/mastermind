import "./Row.css";
import { calculateRowResult, transformColorsToNumbers } from "../../utils";
import CodePeg from "../CodePegs/CodePeg";
import CheckButton from "../CheckButton/CheckButton";
import KeyPegs from "../KeyPegs/KeyPegs";
import { useAppStore, useGameStatusStore, useModalsStore } from "../../store";
import { useState } from "react";
import { useComponentListCreator } from "../../hooks/useComponentListCreator";

const Row = ({ index }) => {
  const { code, settings, currentRow, actions } = useAppStore();
  const { gameStatus, endGame } = useGameStatusStore();

  const [closedCircleGridKey, setClosedCircleGridKey] = useState(false);
  const [codePegsColors, setCodePegsColors] = useState(
    new Array(settings.pegs).fill(null).map(() => "white")
  );
  const [isChecked, setIsChecked] = useState(false);
  const [keyPegs, setKeyPegs] = useState({
    exactMatchPegs: 0,
    colorMatchPegs: 0,
  });

  const isActive = index === currentRow;
  const isLast = index === settings.guesses - 1;

  const onCheckClick = () => {
    setIsChecked(true);
    setClosedCircleGridKey(!closedCircleGridKey);
    actions.setCurrentRow(currentRow + 1);

    const rowResult = calculateRowResult(
      transformColorsToNumbers(codePegsColors),
      code
    );
    setKeyPegs(rowResult);

    const isWinner = rowResult.exactMatchPegs === code.length;
    const isFinished = isWinner || isLast;
    if (isFinished) {
      endGame(isWinner);
    }
  };

  const codePegs = useComponentListCreator(CodePeg, settings.pegs, (index) => ({
    size: "36px",
    setCodePegs: setCodePegsColors,
    backgroundColor: codePegsColors[index],
    isClickable: !gameStatus.finished && isActive && !isChecked,
  }));

  const isCheckButtonClickable =
    !gameStatus.finished &&
    isActive &&
    codePegsColors.every((peg) => peg !== "white");

  const { exactMatchPegs, colorMatchPegs } = keyPegs;
  return (
    <div className="row">
      <div key={closedCircleGridKey} className="codePegs">
        {codePegs}
      </div>
      <div className="check-container">
        {isChecked ? (
          <div className="keyPegs">
            <KeyPegs
              exactMatchPegs={exactMatchPegs}
              colorMatchPegs={colorMatchPegs}
            />
          </div>
        ) : (
          <CheckButton
            isClickable={isCheckButtonClickable}
            onClick={onCheckClick}
          />
        )}
      </div>
    </div>
  );
};

export default Row;
