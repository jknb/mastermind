import { create } from "zustand";
import { THEMES } from "../constants";

const useThemeStore = create((set) => ({
  theme: THEMES.DARK,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
    })),
}));

export default useThemeStore;
