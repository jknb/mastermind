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

export const GAME_MODES = {
  EASY: {
    id: "EASY",
    numberOfGuesses: 8,
    numberOfColors: 6,
    duplicateColors: false,
  },
  NORMAL: {
    id: "NORMAL",
    numberOfGuesses: 7,
    numberOfColors: 7,
    duplicateColors: true,
  },
  HARD: {
    id: "HARD",
    numberOfGuesses: 6,
    numberOfColors: 9,
    duplicateColors: true,
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
