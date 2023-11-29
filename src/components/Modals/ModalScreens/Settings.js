import "./Settings.css";
import { GAME_MODES } from "../../../constants";
import { useAppStore } from "../../../store";
import { useRef, useState } from "react";
import Inputs from "../../Inputs";

export function Settings() {
  const { settings, actions } = useAppStore();
  const [customSettingsClicked, setCustomSettingsClicked] = useState(false);

  const guessesRef = useRef();
  const colorsRef = useRef();
  const pegsRef = useRef();
  const allowDuplicatesRef = useRef();
  const allowBlanksRef = useRef();

  const onSaveClick = () => {
    actions.setGameSettings({
      id: "CUSTOM",
      guesses: +guessesRef.current.value,
      colors: +colorsRef.current.value,
      pegs: +pegsRef.current.value,
      allowDuplicates: allowDuplicatesRef.current.checked,
      allowBlanks: allowBlanksRef.current.checked,
    });
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      {customSettingsClicked ? (
        <div className="custom-settings-container">
          <h3>Custom Settings</h3>
          <Inputs
            isEditable={true}
            refs={{
              guessesRef,
              colorsRef,
              pegsRef,
              allowDuplicatesRef,
              allowBlanksRef,
            }}
          />
          <button
            className="custom-settings-button button-back"
            onClick={() => setCustomSettingsClicked(false)}
          >
            BACK
          </button>
          <button
            className="custom-settings-button button-save"
            onClick={onSaveClick}
          >
            SAVE
          </button>
        </div>
      ) : (
        <div>
          <h3>Choose difficulty</h3>
          <div className="difficulty-buttons-container">
            {Object.entries(GAME_MODES).map(([mode, gameSettings]) => (
              <button
                className={`difficulty-button ${
                  gameSettings.id === settings.id
                    ? "difficulty-button-selected"
                    : ""
                }`}
                key={mode}
                onClick={() => actions.setGameSettings(gameSettings)}
              >
                {mode}
              </button>
            ))}
            <Inputs
              isEditable={false}
              refs={{
                guessesRef,
                colorsRef,
                pegsRef,
                allowDuplicatesRef,
                allowBlanksRef,
              }}
            />
            <button
              className={`difficulty-button button-select-custom ${
                "CUSTOM" === settings.id ? "difficulty-button-selected" : ""
              }`}
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
