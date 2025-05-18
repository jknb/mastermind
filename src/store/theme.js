import { create } from "zustand";
import { LOCAL_STORAGE_KEYS, THEMES } from "../constants";

const { $LOCAL_THEME } = LOCAL_STORAGE_KEYS;

const useThemeStore = create((set) => ({
  theme: localStorage.getItem($LOCAL_THEME) || THEMES.DARK,
  toggleTheme: () =>
    set((state) => {
      const nextTheme =
        state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

      localStorage.setItem($LOCAL_THEME, nextTheme);
      return {
        theme: nextTheme,
      };
    }),
}));
export default useThemeStore;
