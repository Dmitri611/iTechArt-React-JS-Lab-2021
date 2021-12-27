export const addUserAction = (date) => {
  return { type: "ADD_USER", newUser: date };
};

export const thisUserAction = (date) => {
  return { type: "AUTH", thisUserLogin: date };
};
