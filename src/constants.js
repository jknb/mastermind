export const LOCAL_STORAGE_KEYS = {
  $LOCAL_GAME_MODE: "game_mode",
  $LOCAL_THEME: "theme",
};

export const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "brown",
  "teal",
  "magenta",
  "yellow",
  "turquoise",
  "lavender",
  "black",
  "white",
];

export const GAME_PROPS_RANGES = {
  guesses: [6, 10],
  colors: [4, 10],
  pegs: [3, 7],
};

export const CUSTOM_GAME_MODE_ID = "CUSTOM";

export const GAME_MODES = {
  EASY: {
    id: "EASY",
    guesses: 10,
    colors: 4,
    pegs: 3,
    allowDuplicates: true,
    allowBlanks: false,
  },
  MEDIUM: {
    id: "MEDIUM",
    guesses: 10,
    colors: 6,
    pegs: 4,
    allowDuplicates: true,
    allowBlanks: false,
  },
  HARD: {
    id: "HARD",
    guesses: 8,
    colors: 8,
    pegs: 5,
    allowDuplicates: false,
    allowBlanks: false,
  },
  MASTERMIND: {
    id: "MASTERMIND",
    guesses: 7,
    colors: 9,
    pegs: 6,
    allowDuplicates: false,
    allowBlanks: true,
  },
  "MEGA MASTERMIND": {
    id: "MEGA MASTERMIND",
    guesses: 7,
    colors: 10,
    pegs: 7,
    allowDuplicates: false,
    allowBlanks: true,
  },
};

export const MODALS = {
  SETTINGS: "settings",
  GAMEOVER: "gameover",
  INFO: "info",
};

export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};
