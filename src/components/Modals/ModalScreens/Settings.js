import "./Settings.css";
import { CUSTOM_GAME_MODE_ID, GAME_MODES } from "../../../constants";
import { useAppStore } from "../../../store";
import { useRef, useState } from "react";
import Inputs from "../../Inputs";

export function Settings() {
  const guessesRef = useRef();
  const colorsRef = useRef();
  const pegsRef = useRef();
  const allowDuplicatesRef = useRef();
  const allowBlanksRef = useRef();

  const { storedGameModeId, actions } = useAppStore((state) => ({
    storedGameModeId: state.settings.id,
    actions: state.actions,
  }));
  const [newSelectedModeId, setNewSelectedModeId] = useState(storedGameModeId);

  const isSettingsEditable = newSelectedModeId === CUSTOM_GAME_MODE_ID;
  const isSelectedModeIdChanged = newSelectedModeId !== storedGameModeId;

  const onSaveClick = () => {
    actions.setGameSettings({
      id: newSelectedModeId,
      guesses: +guessesRef.current.value,
      colors: +colorsRef.current.value,
      pegs: +pegsRef.current.value,
      allowDuplicates: allowDuplicatesRef.current.checked,
      allowBlanks: allowBlanksRef.current.checked,
    });
    actions.resetGame();
  };

  const onGameModeClick = (gameModeId) => setNewSelectedModeId(gameModeId);

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div>
        <h3>Choose difficulty</h3>
        <div className="difficulty-buttons-container">
          {Object.entries(GAME_MODES).map(([mode, { id }]) => (
            <button
              className={`difficulty-button ${
                id === newSelectedModeId ? "difficulty-button-selected" : ""
              }`}
              key={mode}
              onClick={() => onGameModeClick(id)}
            >
              {mode}
            </button>
          ))}
          <button
            className={`difficulty-button button-select-custom ${
              newSelectedModeId === CUSTOM_GAME_MODE_ID
                ? "difficulty-button-selected"
                : ""
            }`}
            onClick={() => onGameModeClick(CUSTOM_GAME_MODE_ID)}
          >
            Custom Settings
          </button>
          <Inputs
            isEditable={isSettingsEditable}
            refs={{
              guessesRef,
              colorsRef,
              pegsRef,
              allowDuplicatesRef,
              allowBlanksRef,
            }}
            selectedModeId={newSelectedModeId}
          />
          <button
            disabled={
              !isSelectedModeIdChanged &&
              storedGameModeId !== CUSTOM_GAME_MODE_ID
            }
            className="custom-settings-button button-save"
            onClick={onSaveClick}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Settings;
