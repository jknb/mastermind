import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import "./Modal.css";
import {
  faCircleQuestion,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { faGear, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createCode, repeatComponent } from "./utils";
import Row from "./Row";
import Modal from "./Modal";
import GameRules from "./GameRules";
import {
  CodeContext,
  IsGameOverContext,
  SettingsContext,
  ThemeContext,
} from "./Contexts";
import GameOver from "./GameOver";
import { COLORS, GAME_MODES, MODALS } from "./constants";
import Settings from "./Settings";
import { useModals } from "./hooks/useModals";
import { usePropsLogger } from "./hooks/usePropsLogger";
import { useComponentMapper } from "./hooks/useComponentMapper";

function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [gameStatus, setGameStatus] = useContext(IsGameOverContext);
  const [code, setCode] = useContext(CodeContext);
  const [gameSettings, setGameSettings] = useContext(SettingsContext);

  const { modalsState, toggleModal } = useModals();

  // We need to change the `key` from true to false (and vice versa),
  // otherwise React won't know that the list was changed
  const [boardKey, setBoardKey] = useState(true);
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    if (gameStatus.finished) {
      toggleModal(MODALS.GAMEOVER, true);
    }
  }, [gameStatus.finished, toggleModal]);

  const onRowCheck = useCallback(() => setCurrentRow((c) => c + 1), []);

  const resetGame = useCallback(() => {
    setCode(createCode());
    setCurrentRow(0);
    setBoardKey((prevKey) => !prevKey);
  }, [setCode]);

  const onThemeToggle = useCallback(
    () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")),
    [setTheme]
  );

  const onPlayAgainClick = useCallback(() => {
    resetGame();
    toggleModal(MODALS.GAMEOVER, false);
  }, [toggleModal, resetGame]);

  const numberOfRows = 8;

  const rows = useMemo(() => new Array(8).fill(null), []);

  console.log(code.map((n) => `${COLORS[n]} - ${n}`));

  usePropsLogger({
    theme,
    setTheme,
    code,
    setCode,
    gameStatus,
    setGameStatus,
    gameSettings,
    setGameSettings,
    modalsState,
    toggleModal,
    boardKey,
    setBoardKey,
    currentRow,
    setCurrentRow,
    onRowCheck,
    resetGame,
    onThemeToggle,
    onPlayAgainClick,
    rows,
  });

  return (
    <>
      <div className={`app-container ${theme}-theme`}>
        <div className="header">
          <div className="title">Mastermind</div>
          <div className="icons">
            <FontAwesomeIcon
              className="font-awesome-icon"
              icon={faRotateLeft}
              size="2xl"
              onClick={resetGame}
            />
            <FontAwesomeIcon
              className="font-awesome-icon"
              style={{ width: "32px" }}
              onClick={onThemeToggle}
              icon={theme === "light" ? faSun : faMoon}
              size="2xl"
            />
            <FontAwesomeIcon
              className="font-awesome-icon"
              icon={faCircleQuestion}
              size="2xl"
              onClick={() => toggleModal(MODALS.INFO, true)}
            />
            <FontAwesomeIcon
              className="font-awesome-icon"
              icon={faGear}
              size="2xl"
              onClick={() => toggleModal(MODALS.SETTINGS, true)}
            />
          </div>
        </div>
        <hr className="separator" />

        <div key={boardKey} className="game">
          {rows.map((_, index) => (
            <Row
              key={index}
              onCheck={onRowCheck}
              isRowActive={index === currentRow}
              isLastRow={index === numberOfRows - 1}
            />
          ))}
        </div>

        <Modal
          isOpen={modalsState.isInfoModalOpen}
          onClose={useCallback(
            () => toggleModal(MODALS.INFO, false),
            [toggleModal]
          )}
        >
          <GameRules />
          <div className="modal-button">
            <button
              onClick={useCallback(
                () => toggleModal(MODALS.INFO, false),
                [toggleModal]
              )}
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal
          isOpen={modalsState.isGameOverModalOpen}
          onClose={useCallback(
            () => toggleModal(MODALS.GAMEOVER, false),
            [toggleModal]
          )}
        >
          <div className="gameOver">
            <GameOver />
          </div>
          <div className="modal-button">
            <button onClick={onPlayAgainClick}>Play Again</button>
          </div>
        </Modal>
        <Modal
          isOpen={modalsState.isSettingsModalOpen}
          onClose={useCallback(
            () => toggleModal(MODALS.SETTINGS, false),
            [toggleModal]
          )}
        >
          <Settings />
        </Modal>
      </div>
    </>
  );
}

export default App;
