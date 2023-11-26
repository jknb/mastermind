import { useGameStatusStore } from "./store";

function GameOver() {
  const { gameStatus } = useGameStatusStore();

  return (
    <>
      {gameStatus.won ? <h2>Congratulations! You Won!</h2> : <h2>Game Over</h2>}
    </>
  );
}

export default GameOver;
