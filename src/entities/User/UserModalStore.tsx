import { create } from "zustand";

interface IUserModalStore {
  name: null | string;
  setName: (name: null | string) => void;
}

export const useUserModalStore = create<IUserModalStore>((set) => ({
  name: localStorage.getItem("name") || null,
  setName: (name) => {
    localStorage.setItem("name", name || "");
    set({ name });
  },
}));
