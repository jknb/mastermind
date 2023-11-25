function GameRules() {
  return (
    <div style={{ padding: "0 20px" }}>
      <h2>Game Rules</h2>
      <h3>Objective</h3>
      <p>
        A secret combination of 4 colors is selected and you have to guess that
        combination in 8 or fewer tries to win.
      </p>
      <h3>How to play</h3>
      <p>
        From top to bottom, at each row, click on a circle and pick a color.
        After filling all circles in a row, you can check your guess.
      </p>
      <ul>
        <li>
          The number of <span style={{ color: "green" }}>green</span> circles
          shows how many guesses were correct both in color and position
        </li>
        <li>
          The number of <span style={{ color: "orange" }}>orange</span> circles
          show how many guesses were correct only in color.
        </li>
      </ul>
    </div>
  );
}

export default GameRules;
