import { create } from 'zustand'

export const useStore = create((set) => ({
  isLogin: false,
  setIsLogin: () => set((state) => ({ isLogin:isLogin })),
}))
