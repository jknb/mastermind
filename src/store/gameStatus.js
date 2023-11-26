import { create } from "zustand";

const useGameStatusStore = create((set) => ({
  gameStatus: { finished: false, won: false },
  setGameStatus: (newGameStatus) => set(() => ({ gameStatus: newGameStatus })),
}));

export default useGameStatusStore;
