import { create } from "zustand";

const useRowStore = create((set) => ({
  codePegs: new Array(4)
    .fill(null)
    .map(() => ({ selection: "white", isGridOpen: false })),
  isChecked: false,
  keyPegs: { greenPegs: 0, redPegs: 0 },
  setCodePegs: (newCodePegs) => set(() => ({ codePegs: newCodePegs })),
  setIsChecked: (checked) => set(() => ({ isChecked: checked })),
  setKeyPegs: (newKeyPegs) => set(() => ({ keyPegs: newKeyPegs })),
}));

export default useRowStore;
