import { persistStore } from "@/utils/storage";

type THomeStore = {
  name: string;
  setName: (newName: string) => void;
};

export const homeStore = persistStore<THomeStore>(
  (set) => ({
    name: "aaaa",
    setName: (newName) => set({ name: newName }),
  }),
  "homeStore"
);
