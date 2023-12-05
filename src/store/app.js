import { create } from "zustand";
import { GAME_MODES, LOCAL_STORAGE_KEYS } from "../constants";
import { createCode } from "../utils";
import useGameStatusStore from "./gameStatus";

const { $LOCAL_GAME_MODE } = LOCAL_STORAGE_KEYS;
export const defaultGameMode =
  JSON.parse(localStorage.getItem($LOCAL_GAME_MODE)) || GAME_MODES.MEDIUM;

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
    setGameSettings: (newSettings) =>
      set(() => {
        localStorage.setItem($LOCAL_GAME_MODE, JSON.stringify(newSettings));
        return {
          settings: newSettings,
        };
      }),
  },
}));

export default useAppStore;
