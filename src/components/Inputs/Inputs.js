import "./Inputs.css";
import { useAppStore } from "../../store";
import Checkbox from "../Checkbox";
import LabelComponent from "../Label";
import Slider from "../Slider";
import { useState } from "react";

const Inputs = ({ isEditable, refs }) => {
  const { settings, actions } = useAppStore();
  const { guesses, colors, pegs, allowDuplicates, allowBlanks } = settings;
  const { guessesRef, colorsRef, pegsRef, allowDuplicatesRef, allowBlanksRef } =
    refs;

  const [inputValues, setInputValues] = useState({
    guesses,
    colors,
    pegs,
    allowDuplicates,
    allowBlanks,
  });

  const onInputChange = (value, settingKey) => {
    setInputValues((prevValues) => ({ ...prevValues, [settingKey]: value }));
    // actions.setGameSettings({ id: "CUSTOM", [settingKey]: value });
  };

  const disabled = !isEditable;
  const getValue = (key) => (isEditable ? inputValues[key] : settings[key]);
  return (
    <div className="input-group">
      <div className="labels">
        <LabelComponent htmlFor="guessesNumber">Guesses:</LabelComponent>
        <LabelComponent htmlFor="colorsNumber">Colors:</LabelComponent>
        <LabelComponent htmlFor="pegsNumber">Colors:</LabelComponent>
        <LabelComponent htmlFor="allowDuplicates">
          Allow Duplicates:
        </LabelComponent>
        <LabelComponent htmlFor="allowBlanks">Allow Blanks:</LabelComponent>
      </div>
      <div className="inputs">
        <Slider
          id="guessesNumber"
          ref={guessesRef}
          value={getValue("guesses")}
          disabled={disabled}
          range={settings.ranges.guesses}
          onSliderChange={(e) => onInputChange(+e.target.value, "guesses")}
        />
        <Slider
          id="colorsNumber"
          ref={colorsRef}
          value={getValue("colors")}
          disabled={disabled}
          range={settings.ranges.colors}
          onSliderChange={(e) => onInputChange(+e.target.value, "colors")}
        />
        <Slider
          id="pegsNumber"
          ref={pegsRef}
          value={getValue("pegs")}
          disabled={disabled}
          range={settings.ranges.pegs}
          onSliderChange={(e) => onInputChange(+e.target.value, "pegs")}
        />
        <Checkbox
          id="allowDuplicates"
          ref={allowDuplicatesRef}
          checked={getValue("allowDuplicates")}
          disabled={disabled}
          onCheckboxChange={(e) =>
            onInputChange(e.target.checked, "allowDuplicates")
          }
        />
        <Checkbox
          id="allowBlanks"
          ref={allowBlanksRef}
          checked={getValue("allowBlanks")}
          disabled={disabled}
          onCheckboxChange={(e) =>
            onInputChange(e.target.checked, "allowBlanks")
          }
        />
      </div>
    </div>
  );
};

export default Inputs;
