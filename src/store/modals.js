import { create } from "zustand";
import { MODALS } from "../constants";

export const useModalsStore = create((set) => ({
  modals: {
    [MODALS.GAMEOVER]: false,
    [MODALS.INFO]: false,
    [MODALS.SETTINGS]: false,
  },
  toggleModal: (modal, open) =>
    set((state) => ({ modals: { ...state.modals, [modal]: open } })),
}));

export default useModalsStore;
