import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { createMMKVStorage } from "./createMMKVStorage";

function createMMKVPersistStorage(name: string) {
  const storage = createMMKVStorage(name);
  return createJSONStorage(() => ({
    setItem: storage.set,
    getItem: storage.getString,
    removeItem: storage.delete,
  }));
}

export function persistStore<T>(state: StateCreator<T>, name: string) {
  return create(
    persist(state, { name, storage: createMMKVPersistStorage(name) })
  );
}
