import { ADD_USER } from "../constants/constants";

const usersState = {
  users: [
    {
      login: "admin",
      password: "admin",
      email: "admin",
    },
    {
      login: "dima",
      password: "dima",
      email: "dima",
    },
  ],
};

export const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.newUser, ...state.users],
      };
    default:
      return state;
  }
};
