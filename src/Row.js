import "./Row.css";
import { calculateRowResult, transformColorsToNumbers } from "./utils";
import CodePeg from "./CodePeg";
import CheckButton from "./CheckButton";
import KeyPegs from "./KeyPegs";
import { useAppStore, useGameStatusStore, useModalsStore } from "./store";
import { useState } from "react";
import { useComponentListCreator } from "./hooks/useComponentListCreator";

const Row = ({ index }) => {
  const { code, settings, currentRow, actions } = useAppStore();
  const { toggleModal } = useModalsStore();
  const { gameStatus, setGameStatus, endGame } = useGameStatusStore();

  const [codePegsStatus, setCodePegsStatus] = useState(
    new Array(4)
      .fill(null)
      .map(() => ({ selection: "white", isGridOpen: false }))
  );
  const [isChecked, setIsChecked] = useState(false);
  const [keyPegs, setKeyPegs] = useState({ greenPegs: 0, redPegs: 0 });

  const isActive = index === currentRow;
  const isLast = index === settings.numberOfGuesses - 1;

  const onCheckClick = () => {
    setIsChecked(true);
    closeCircleGrids();
    actions.setCurrentRow(currentRow + 1);

    const rowResult = calculateRowResult(
      transformColorsToNumbers(
        codePegsStatus.map(({ selection }) => selection)
      ),
      code
    );
    setKeyPegs(rowResult);

    const isWinner = rowResult.greenPegs === code.length;
    const isFinished = isWinner || isLast;
    if (isFinished) {
      endGame(isWinner);
    }
  };

  const closeCircleGrids = () =>
    setCodePegsStatus(
      codePegsStatus.map((peg) => ({ ...peg, isGridOpen: false }))
    );

  const codePegs = useComponentListCreator(CodePeg, 4, (index) => ({
    size: "36px",
    setCodePegs: setCodePegsStatus,
    backgroundColor: codePegsStatus[index].selection,
    isClickable: !gameStatus.finished && isActive && !isChecked,
    isGridOpen: codePegsStatus[index].isGridOpen,
  }));

  const isCheckButtonClickable =
    !gameStatus.finished &&
    isActive &&
    codePegsStatus.every(({ selection }) => selection !== "white");

  const { greenPegs, redPegs } = keyPegs;
  return (
    <div className="row">
      <div className="codePegs">{codePegs}</div>
      <div className="check-container">
        {isChecked ? (
          <div className="keyPegs">
            <KeyPegs greenPegs={greenPegs} redPegs={redPegs} />
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
