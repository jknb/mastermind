import "./Settings.css";
import { GAME_MODES } from "../../../constants";
import { useAppStore, useModalsStore } from "../../../store";
import { useRef, useState } from "react";
import Slider from "../../Slider";
import Checkbox from "../../Checkbox";
import LabelComponent from "../../Label";

export function Settings() {
  const { settings, actions } = useAppStore();
  const { numberOfGuesses, numberOfColors, duplicateColors } = settings;
  const [customSettingsClicked, setCustomSettingsClicked] = useState(false);

  const numberOfGuessesRef = useRef();
  const numberOfColorsRef = useRef();
  const duplicateColorsRef = useRef();

  const onSaveClick = () => {
    actions.setGameSettings({
      id: "CUSTOM",
      numberOfGuesses: +numberOfGuessesRef.current.value,
      numberOfColors: +numberOfColorsRef.current.value,
      duplicateColors: duplicateColorsRef.current.checked,
    });
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      {customSettingsClicked ? (
        <div className="custom-settings-container">
          <h3>Custom Settings</h3>
          <div className="input-group">
            <div className="labels">
              <LabelComponent htmlFor="guessesNumber">Guesses:</LabelComponent>
              <LabelComponent htmlFor="hasDuplicates">
                Duplicate colors:
              </LabelComponent>
              <LabelComponent htmlFor="colorsNumber">Colors:</LabelComponent>
            </div>
            <div className="inputs">
              <Slider
                id="guessesNumber"
                ref={numberOfGuessesRef}
                initialValue={numberOfGuesses}
                range={settings.ranges.guesses}
              />
              <Checkbox
                id="hasDuplicates"
                ref={duplicateColorsRef}
                initialValue={duplicateColors}
              />
              <Slider
                id="colorsNumber"
                ref={numberOfColorsRef}
                initialValue={numberOfColors}
                range={settings.ranges.colors}
              />
            </div>
          </div>
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
