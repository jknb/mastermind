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
  closeModals: () =>
    set((state) => ({
      modals: Object.fromEntries(
        Object.keys(state.modals).map((modal) => [modal, false])
      ),
    })),
}));

export default useModalsStore;
