import "./Settings.css";
import { GAME_MODES } from "./constants";
import { useAppStore } from "./store";

export function Settings() {
  const { settings, actions } = useAppStore();
  const { numberOfGuesses, numberOfColors, duplicateColors } = settings;

  return (
    <div className="settings-container">
      <div>Settings</div>
      <div>Choose difficulty</div>
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
      </div>
      <button>Custom Settings</button>
      <div>numberOfGuesses: {numberOfGuesses}</div>
      <div>duplicateColors: {duplicateColors ? "Yes" : "No"}</div>

      <div>numberOfColors: {numberOfColors}</div>
    </div>
  );
}
export default Settings;
