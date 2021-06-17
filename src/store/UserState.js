import { atom } from "recoil";

export const useState = atom({
  key: "userState",
  default: { isAdmin: false }
});
