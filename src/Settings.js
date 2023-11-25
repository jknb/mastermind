import "./Settings.css";

import { useContext } from "react";
import { SettingsContext } from "./Contexts";
import { GAME_MODES } from "./constants";

export function Settings() {
  const [gameSettings, setGameSettings] = useContext(SettingsContext);
  const { numberOfGuesses, numberOfColors, duplicateColors } = gameSettings;

  return (
    <div className="settings-container">
      <div>Settings</div>
      <div>Choose difficulty</div>
      <div className="difficulty-buttons-container">
        {Object.entries(GAME_MODES).map(([mode, settings]) => (
          <button
            className="difficulty-button"
            key={mode}
            onClick={() => setGameSettings(settings)}
          >
            {mode}
          </button>
        ))}
      </div>
      <button>Custom Settings</button>
      <div>numberOfGuesses: {numberOfGuesses}</div>
      <div>duplicateColors: {duplicateColors ? "Yes" : "No"}</div>

      <div>numberOfColors: {numberOfColors}</div>
    </div>
  );
}
export default Settings;
