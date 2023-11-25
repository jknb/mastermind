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
  "white",
];

export const GAME_MODES = {
  EASY: {
    numberOfGuesses: 8,
    numberOfColors: 6,
    duplicateColors: false,
  },
  MEDIUM: {
    numberOfGuesses: 8,
    numberOfColors: 7,
    duplicateColors: true,
  },
  HARD: {
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
