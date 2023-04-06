import { create } from 'zustand'

export const useStore = create((set) => ({
  fabricCanvas: {},
  setFabricCanvas: (val) => set((state) =>({fabricCanvas:{...state.fabricCanvas,...val}})),
}))

