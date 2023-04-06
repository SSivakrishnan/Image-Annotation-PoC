import { create } from 'zustand'

export const useStore = create((set) => ({
  fabricCanvasRef:null,
  setFabricCanvasRef:(val)=>set(()=>({fabricCanvasRef:val}))
}))

