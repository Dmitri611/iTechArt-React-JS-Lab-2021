import { ADD_PIZZA, DELETE_PIZZA } from "../constants/constants";

export const addPizzaAction = (date) => {
  return { type: ADD_PIZZA, newItem: date };
};

export const delPizzaAction = (date) => {
  return { type: DELETE_PIZZA, delPizza: date };
};
