import { ENTRY_CURRENT_USER } from "../constants/constants";

export const authUser = (date) => {
  return { type: ENTRY_CURRENT_USER, authUser: date };
};
