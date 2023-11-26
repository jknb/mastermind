import "./Modal.css";
import GameOver from "./GameOver";
import GameRules from "./GameRules";
import Modal from "./Modal";
import Settings from "./Settings";
import { MODALS } from "./constants";
import { useAppStore, useModalsStore } from "./store";

const Modals = () => {
  const { modals, toggleModal } = useModalsStore();
  const { actions } = useAppStore();

  const onPlayAgainClick = () => {
    actions.resetGame();
    toggleModal(MODALS.GAMEOVER, false);
  };

  return (
    <>
      <Modal
        isOpen={modals.info}
        onClose={() => toggleModal(MODALS.INFO, false)}
      >
        <GameRules />
        <div className="modal-button">
          <button onClick={() => toggleModal(MODALS.INFO, false)}>Close</button>
        </div>
      </Modal>
      <Modal
        isOpen={modals.gameover}
        onClose={() => toggleModal(MODALS.GAMEOVER, false)}
      >
        <div className="gameOver">
          <GameOver />
        </div>
        <div className="modal-button">
          <button onClick={onPlayAgainClick}>Play Again</button>
        </div>
      </Modal>
      <Modal
        isOpen={modals.settings}
        onClose={() => toggleModal(MODALS.SETTINGS, false)}
      >
        <Settings />
      </Modal>
    </>
  );
};

export default Modals;
