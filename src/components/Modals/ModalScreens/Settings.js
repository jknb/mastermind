import "./Settings.css";
import { CUSTOM_GAME_MODE_ID, GAME_MODES } from "../../../constants";
import { useAppStore } from "../../../store";
import Inputs from "../../Inputs";
import useSettingsStore from "../../../store/settings";

export function Settings() {
  const { storedSettings, actions } = useAppStore((state) => ({
    storedSettings: state.settings,
    actions: state.actions,
  }));
  const { tempSettings, setTempSettings } = useSettingsStore();

  const onSaveClick = () => {
    actions.setGameSettings(tempSettings);
    actions.resetGame();
  };

  const onGameModeClick = (gameModeId) => {
    if (gameModeId !== tempSettings.id) {
      setTempSettings(
        gameModeId === CUSTOM_GAME_MODE_ID
          ? { id: CUSTOM_GAME_MODE_ID }
          : GAME_MODES[gameModeId]
      );
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div>
        <h3>Choose difficulty</h3>
        <div className="difficulty-buttons-container">
          {Object.entries(GAME_MODES).map(([mode, { id }]) => (
            <button
              className={`difficulty-button ${
                id === tempSettings.id ? "difficulty-button-selected" : ""
              }`}
              key={mode}
              onClick={() => onGameModeClick(id)}
            >
              {mode}
            </button>
          ))}
          <button
            className={`difficulty-button button-select-custom ${
              tempSettings.id === CUSTOM_GAME_MODE_ID
                ? "difficulty-button-selected"
                : ""
            }`}
            onClick={() => onGameModeClick(CUSTOM_GAME_MODE_ID)}
          >
            Custom Settings
          </button>
          <Inputs />
          <button
            disabled={
              tempSettings.id === storedSettings.id &&
              (storedSettings.id !== CUSTOM_GAME_MODE_ID ||
                (storedSettings.id === CUSTOM_GAME_MODE_ID &&
                  Object.entries(storedSettings).every(
                    ([key, value]) => tempSettings[key] === value
                  )))
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
