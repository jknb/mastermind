import { create } from "zustand";
import { GAME_MODES, GAME_PROPS_RANGES } from "../constants";
import { createCode } from "../utils";
import useGameStatusStore from "./gameStatus";

const defaultMode = GAME_MODES.EASY;

const useAppStore = create((set, get) => ({
  settings: {
    ...defaultMode,
    ranges: { ...GAME_PROPS_RANGES },
  },
  code: createCode(defaultMode.allowDuplicates),
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
      set(() => ({ code: createCode(get().settings.allowDuplicates) })),
    setCurrentRow: (rowIndex) => set(() => ({ currentRow: rowIndex })),
    setGameSettings: (partialSettings) =>
      set((state) => ({ settings: { ...state.settings, ...partialSettings } })),
  },
}));

export default useAppStore;
