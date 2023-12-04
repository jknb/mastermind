import { create } from "zustand";
import useAppStore from "./app";

const useSettingsStore = create((set) => ({
  tempSettings: useAppStore.getState().settings,
  setTempSettings: (partialSettings) =>
    set((state) => ({
      tempSettings: { ...state.tempSettings, ...partialSettings },
    })),
}));

export default useSettingsStore;
