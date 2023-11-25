import { useContext } from "react";
import { IsGameOverContext } from "./Contexts";

function GameOver() {
  const [gameStatus] = useContext(IsGameOverContext);

  return (
    <>
      {gameStatus.won ? <h2>Congratulations! You Won!</h2> : <h2>Game Over</h2>}
    </>
  );
}

export default GameOver;
