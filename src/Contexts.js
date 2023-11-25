import { createContext } from "react";

const CodeContext = createContext(null);
const IsGameOverContext = createContext(null);
const ThemeContext = createContext(null);
const SettingsContext = createContext({});

export { CodeContext, IsGameOverContext, ThemeContext, SettingsContext };
