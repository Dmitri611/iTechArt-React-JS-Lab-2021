import { ADD_USER } from "../constants/constants";

const usersState = {
  users: [
    {
      login: "admin",
      password: "admin",
      email: "admin",
      firstName: "",
      lastName: "",
      address: "",
    },
    {
      login: "dima",
      password: "dima",
      email: "dima",
      firstName: "Dmitri",
      lastName: "Novikov",
      address: "Vitebsk",
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
    // case EDIT_USER:
    //   return {
    //     ...state,
    //     users: state.users.filter((user) => user.name !== action.editUser),
    //   };
    default:
      return state;
  }
};
