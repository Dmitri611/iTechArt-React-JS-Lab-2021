import { ADD_USER } from "../constants/constants";

export const addUserAction = (date) => {
  return { type: ADD_USER, newUser: date };
};
