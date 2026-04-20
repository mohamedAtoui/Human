import { create } from "zustand";
import { SYSTEM_IDS, type SystemId } from "@/data/systems";

interface AnatomyState {
  selectedId: string | null;
  hoveredId: string | null;
  visibleSystems: Record<SystemId, boolean>;
  /** 0 = skin fully visible, 1 = skin fully transparent (muscle visible), 2 = skeleton only */
  layerPeel: number;
  setSelected: (id: string | null) => void;
  setHovered: (id: string | null) => void;
  toggleSystem: (id: SystemId) => void;
  setAllSystems: (value: boolean) => void;
  setLayerPeel: (v: number) => void;
}

const allSystemsOn = Object.fromEntries(SYSTEM_IDS.map((s) => [s, true])) as Record<SystemId, boolean>;

export const useAnatomyStore = create<AnatomyState>((set) => ({
  selectedId: null,
  hoveredId: null,
  visibleSystems: allSystemsOn,
  layerPeel: 0,
  setSelected: (id) => set({ selectedId: id }),
  setHovered: (id) => set({ hoveredId: id }),
  toggleSystem: (id) =>
    set((state) => ({
      visibleSystems: { ...state.visibleSystems, [id]: !state.visibleSystems[id] },
    })),
  setAllSystems: (value) =>
    set({
      visibleSystems: Object.fromEntries(SYSTEM_IDS.map((s) => [s, value])) as Record<SystemId, boolean>,
    }),
  setLayerPeel: (v) => set({ layerPeel: v }),
}));
