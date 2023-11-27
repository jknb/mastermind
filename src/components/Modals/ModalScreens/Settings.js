import "./Settings.css";
import { GAME_MODES } from "../../../constants";
import { useAppStore } from "../../../store";
import { useState } from "react";

export function Settings() {
  const { settings, actions } = useAppStore();
  const { numberOfGuesses, numberOfColors, duplicateColors } = settings;
  const [customSettingsClicked, setCustomSettingsClicked] = useState(false);

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      {customSettingsClicked ? (
        <div className="custom-settings-container">
          <h3>Custom Settings</h3>
          <div>numberOfGuesses: {numberOfGuesses}</div>
          <div>duplicateColors: {duplicateColors ? "Yes" : "No"}</div>
          <div>numberOfColors: {numberOfColors}</div>
          <button
            className="custom-settings-button button-back"
            onClick={() => setCustomSettingsClicked(false)}
          >
            BACK
          </button>
          <button
            className="custom-settings-button button-save"
            onClick={() => actions.setGameSettings({})}
          >
            SAVE
          </button>
        </div>
      ) : (
        <div>
          <h3>Choose difficulty</h3>
          <div className="difficulty-buttons-container">
            {Object.entries(GAME_MODES).map(([mode, settings]) => (
              <button
                className="difficulty-button"
                key={mode}
                onClick={() => actions.setGameSettings(settings)}
              >
                {mode}
              </button>
            ))}
            <button
              className="difficulty-button button-select-custom"
              onClick={() => setCustomSettingsClicked(true)}
            >
              Custom Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Settings;
