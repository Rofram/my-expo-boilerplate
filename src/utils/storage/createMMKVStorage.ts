import { MMKV } from "react-native-mmkv";

export const createMMKVStorage = (name: string) =>
  new MMKV({
    id: `user-${name}-storage`,
  });
