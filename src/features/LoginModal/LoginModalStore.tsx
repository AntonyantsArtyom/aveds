import { create } from "zustand";

interface ILoginModalStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useLoginModalStore = create<ILoginModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => {
    set({ isOpen });
  },
}));
