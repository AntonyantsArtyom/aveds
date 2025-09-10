import { create } from "zustand";

interface IUserModalStore {
  login: null | string;
  setLogin: (login: null | string) => void;
}

export const useUserModalStore = create<IUserModalStore>((set) => ({
  login: localStorage.getItem("login") || null,
  setLogin: (login) => {
    localStorage.setItem("login", login || "");
    set({ login });
  },
}));
