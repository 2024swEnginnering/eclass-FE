import { create } from "zustand";

interface CurrentState {
  current: number;
  setCurrent: (current: number) => void;
}

const useGroupCurrentStore = create<CurrentState>()((set) => ({
  current: 0,
  setCurrent: (current: number) => set({ current: current }),
}));

export default useGroupCurrentStore;
