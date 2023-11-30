import { create } from "zustand";
import { GAME_MODES, GAME_PROPS_RANGES } from "../constants";
import { createCode } from "../utils";
import useGameStatusStore from "./gameStatus";

export const defaultGameMode = GAME_MODES.MEDIUM;

const useAppStore = create((set, get) => ({
  settings: defaultGameMode,
  code: createCode(defaultGameMode.pegs, defaultGameMode.allowDuplicates),
  currentRow: 0,
  gameKey: true,

  actions: {
    resetGame: () => {
      get().actions.setNewCode();
      get().actions.setCurrentRow(0);
      useGameStatusStore
        .getState()
        .setGameStatus({ finished: false, won: false });
      set((state) => ({ gameKey: !state.gameKey }));
    },
    setNewCode: () =>
      set(() => ({
        code: createCode(get().settings.pegs, get().settings.allowDuplicates),
      })),
    setCurrentRow: (rowIndex) => set(() => ({ currentRow: rowIndex })),
    setGameSettings: (partialSettings) =>
      set((state) => ({ settings: { ...state.settings, ...partialSettings } })),
  },
}));

export default useAppStore;
