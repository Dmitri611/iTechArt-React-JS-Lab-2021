export const addPizzaAction = (date) => {
  return { type: "ADD_PIZZA", newItem: date };
};

export const delPizzaAction = (date) => {
  return { type: "DELETE_PIZZA", delPizza: date };
};
