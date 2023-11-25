import "./Row.css";
import {
  calculateRowResult,
  repeatComponent,
  transformColorsToNumbers,
} from "./utils";
import BigCircle from "./BigCircle";
import { memo, useContext, useEffect, useState } from "react";
import CheckButton from "./CheckButton";
import { CodeContext, IsGameOverContext } from "./Contexts";
import KeyPegs from "./KeyPegs";
import { usePropsLogger } from "./hooks/usePropsLogger";

const Row = memo(function Row(props) {
  usePropsLogger(props);
  const { onCheck, isRowActive, isLastRow } = props;
  console.log("row");

  const [code] = useContext(CodeContext);
  const [gameStatus, setGameStatus] = useContext(IsGameOverContext);
  usePropsLogger({
    code,
    gameStatus,
    setGameStatus,
    IsGameOverContext,
    CodeContext,
  });

  const [bigCirclesStatus, setBigCirclesStatus] = useState(
    new Array(4)
      .fill(null)
      .map(() => ({ selection: "white", isGridOpen: false }))
  );
  const [isChecked, setIsChecked] = useState(false);
  const [pegsStatus, setPegsStatus] = useState({ greenPegs: 0, redPegs: 0 });

  const isBigCircleClickable =
    !gameStatus.finished && isRowActive && !isChecked;
  const isCheckButtonClickable =
    !gameStatus.finished &&
    isRowActive &&
    bigCirclesStatus.every(({ selection }) => selection !== "white");
  const isLastRowChecked = isChecked && isLastRow;

  const onCheckClick = () => {
    const bigCirclesColors = bigCirclesStatus.map(({ selection }) => selection);

    onCheck();
    setIsChecked(true);
    closeCircleGrids();

    const guess = transformColorsToNumbers(bigCirclesColors);
    const rowResult = calculateRowResult(guess, code);
    setPegsStatus(() => rowResult);
  };

  const closeCircleGrids = () => {
    setBigCirclesStatus((prevStatus) =>
      prevStatus.map((bigCircleStatus) => ({
        ...bigCircleStatus,
        isGridOpen: false,
      }))
    );
  };

  const isWinner = pegsStatus.greenPegs === code.length;
  const isFinished = isWinner || isLastRowChecked;
  useEffect(() => {
    if (isFinished !== gameStatus.finished || isWinner !== gameStatus.won) {
      setGameStatus(() => ({
        finished: isFinished,
        won: isWinner,
      }));
    }
  }, [isFinished, isWinner, setGameStatus, gameStatus.finished, gameStatus.won]);

  const bigCircles = repeatComponent(BigCircle, 4, (index) => ({
    size: "36px",
    setBigCirclesStatus,
    backgroundColor: bigCirclesStatus[index].selection,
    isClickable: isBigCircleClickable,
    isGridOpen: bigCirclesStatus[index].isGridOpen,
  }));

  return (
    <div className="row">
      <div className="bigCircles">{bigCircles}</div>
      <div className="check-container">
        {isChecked ? (
          <div className="smallCircles">
            <KeyPegs
              greenPegs={pegsStatus.greenPegs}
              redPegs={pegsStatus.redPegs}
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
});

export default Row;
