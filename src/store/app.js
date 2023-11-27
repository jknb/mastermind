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
    resetGame: () => {
      get().actions.setNewCode();
      get().actions.setCurrentRow(0);
      useGameStatusStore
        .getState()
        .setGameStatus({ finished: false, won: false });
      set((state) => ({ gameKey: !state.gameKey }));
    },
    setNewCode: () => set(() => ({ code: createCode() })),
    setCurrentRow: (rowIndex) => set(() => ({ currentRow: rowIndex })),
    setGameSettings: (newSettings) => set(() => ({ settings: newSettings })),
  },
}));

export default useAppStore;
