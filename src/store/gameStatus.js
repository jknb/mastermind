import { create } from "zustand";
import useModalsStore from "./modals";
import { MODALS } from "../constants";

const useGameStatusStore = create((set, get) => ({
  gameStatus: { finished: false, won: false },
  setGameStatus: (newGameStatus) => set(() => ({ gameStatus: newGameStatus })),
  endGame: (isWinner) => {
    get().setGameStatus({ finished: true, won: isWinner });
    useModalsStore.getState().toggleModal(MODALS.GAMEOVER, true);
  },
}));

export default useGameStatusStore;
