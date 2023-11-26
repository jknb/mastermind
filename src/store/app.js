import { create } from "zustand";
import { GAME_MODES } from "../constants";
import { createCode } from "../utils";
import useGameStatusStore from "./gameStatus";

const useAppStore = create((set, get) => ({
  settings: GAME_MODES.EASY,
  code: createCode(),
  currentRow: 0,
  gameKey: true,

  actions: {
    setNewCode: () => set(() => ({ code: createCode() })),
    resetGame: () => {
      get().actions.setNewCode();
      get().actions.setCurrentRow(0);
      useGameStatusStore
        .getState()
        .setGameStatus({ finished: false, won: false });
      set((state) => ({ gameKey: !state.gameKey }));
    },
    setCurrentRow: (rowIndex) => set(() => ({ currentRow: rowIndex })),
    setGameSettings: (newSettings) => set(() => ({ settings: newSettings })),
  },
}));

export default useAppStore;
