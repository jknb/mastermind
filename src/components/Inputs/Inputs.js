import "./Inputs.css";
import Checkbox from "../Checkbox";
import LabelComponent from "../Label";
import Slider from "../Slider";
import { CUSTOM_GAME_MODE_ID, GAME_PROPS_RANGES } from "../../constants";
import useSettingsStore from "../../store/settings";

const Inputs = () => {
  const { tempSettings, setTempSettings } = useSettingsStore();
  const { guesses, colors, pegs, allowDuplicates, allowBlanks } = tempSettings;

  const onInputChange = (value, settingKey) =>
    setTempSettings({ [settingKey]: value });

  const disabled = tempSettings.id !== CUSTOM_GAME_MODE_ID;
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
          value={guesses}
          disabled={disabled}
          range={GAME_PROPS_RANGES.guesses}
          onSliderChange={(e) => onInputChange(+e.target.value, "guesses")}
        />
        <Slider
          id="colorsNumber"
          value={colors}
          disabled={disabled}
          range={GAME_PROPS_RANGES.colors}
          onSliderChange={(e) => onInputChange(+e.target.value, "colors")}
        />
        <Slider
          id="pegsNumber"
          value={pegs}
          disabled={disabled}
          range={GAME_PROPS_RANGES.pegs}
          onSliderChange={(e) => onInputChange(+e.target.value, "pegs")}
        />
        <Checkbox
          id="allowDuplicates"
          checked={allowDuplicates}
          disabled={disabled}
          onCheckboxChange={(e) =>
            onInputChange(e.target.checked, "allowDuplicates")
          }
        />
        <Checkbox
          id="allowBlanks"
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
