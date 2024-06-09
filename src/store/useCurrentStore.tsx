import { create } from "zustand";

interface CurrentState {
  current: string;
  setCurrent: (current: string) => void;
}

const useCurrentStore = create<CurrentState>()((set) => ({
  current: "대시보드",
  setCurrent: (current: string) => set({ current: current }),
}));

export default useCurrentStore;
