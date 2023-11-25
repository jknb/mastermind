import { useState } from "react";
import {
  CodeContext,
  IsGameOverContext,
  SettingsContext,
  ThemeContext,
} from "./Contexts";
import { createCode } from "./utils";
import { GAME_MODES } from "./constants";

const initialCode = createCode();

function ContextWrapper({ children }) {
  const [theme, setTheme] = useState("dark");
  const [gameStatus, setGameStatus] = useState({ finished: false, won: false });
  const [code, setCode] = useState(initialCode);
  const [gameSettings, setGameSettings] = useState(GAME_MODES.EASY);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <IsGameOverContext.Provider value={[gameStatus, setGameStatus]}>
        <CodeContext.Provider value={[code, setCode]}>
          <SettingsContext.Provider value={[gameSettings, setGameSettings]}>
            {children}
          </SettingsContext.Provider>
        </CodeContext.Provider>
      </IsGameOverContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ContextWrapper;
