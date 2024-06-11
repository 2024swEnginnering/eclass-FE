import { create } from "zustand";

interface TeamState {
  teammates: string[];
  setTeammates: (teammates: string[]) => void;
}

const useTeamStore = create<TeamState>()((set) => ({
  teammates: [],
  setTeammates: (teammates: string[]) => set({ teammates: teammates }),
}));

export default useTeamStore;
