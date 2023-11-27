import "./Settings.css";
import { GAME_MODES } from "../../../constants";
import { useAppStore } from "../../../store";

export function Settings() {
  const { settings, actions } = useAppStore();
  const { numberOfGuesses, numberOfColors, duplicateColors } = settings;

  return (
    <div className="settings-container">
      <h2>Settings</h2>
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
        <button className="difficulty-button">Custom Settings</button>
      </div>

      <div>numberOfGuesses: {numberOfGuesses}</div>
      <div>duplicateColors: {duplicateColors ? "Yes" : "No"}</div>

      <div>numberOfColors: {numberOfColors}</div>
    </div>
  );
}
export default Settings;
