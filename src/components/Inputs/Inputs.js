import "./Inputs.css";
import { useAppStore } from "../../store";
import Checkbox from "../Checkbox";
import LabelComponent from "../Label";
import Slider from "../Slider";
import { useEffect, useState } from "react";
import {
  CUSTOM_GAME_MODE_ID,
  GAME_MODES,
  GAME_PROPS_RANGES,
} from "../../constants";

const Inputs = ({ isEditable, selectedModeId, refs }) => {
  const disabled = !isEditable;
  const { settings } = useAppStore();
  const { guessesRef, colorsRef, pegsRef, allowDuplicatesRef, allowBlanksRef } =
    refs;
  const [
    { guesses, colors, pegs, allowDuplicates, allowBlanks },
    setInputValues,
  ] = useState(settings);

  const onInputChange = (value, settingKey) => {
    setInputValues((prevValues) => ({ ...prevValues, [settingKey]: value }));
  };

  useEffect(() => {
    setInputValues((prevValues) =>
      selectedModeId === CUSTOM_GAME_MODE_ID
        ? prevValues
        : GAME_MODES[selectedModeId]
    );
  }, [selectedModeId]);

  return (
    <div className="input-group">
      <div className="labels">
        <LabelComponent htmlFor="guessesNumber">Guesses:</LabelComponent>
        <LabelComponent htmlFor="colorsNumber">Colors:</LabelComponent>
        <LabelComponent htmlFor="pegsNumber">Pegs:</LabelComponent>
        <LabelComponent htmlFor="allowDuplicates">
          Allow Duplicates:
        </LabelComponent>
        <LabelComponent htmlFor="allowBlanks">Allow Blanks:</LabelComponent>
      </div>
      <div className="inputs">
        <Slider
          id="guessesNumber"
          ref={guessesRef}
          value={guesses}
          disabled={disabled}
          range={GAME_PROPS_RANGES.guesses}
          onSliderChange={(e) => onInputChange(+e.target.value, "guesses")}
        />
        <Slider
          id="colorsNumber"
          ref={colorsRef}
          value={colors}
          disabled={disabled}
          range={GAME_PROPS_RANGES.colors}
          onSliderChange={(e) => onInputChange(+e.target.value, "colors")}
        />
        <Slider
          id="pegsNumber"
          ref={pegsRef}
          value={pegs}
          disabled={disabled}
          range={GAME_PROPS_RANGES.pegs}
          onSliderChange={(e) => onInputChange(+e.target.value, "pegs")}
        />
        <Checkbox
          id="allowDuplicates"
          ref={allowDuplicatesRef}
          checked={allowDuplicates}
          disabled={disabled}
          onCheckboxChange={(e) =>
            onInputChange(e.target.checked, "allowDuplicates")
          }
        />
        <Checkbox
          id="allowBlanks"
          ref={allowBlanksRef}
          checked={allowBlanks}
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
