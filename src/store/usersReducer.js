const usersState = {
  users: [
    {
      login: "admin",
      password: "admin",
      email: "admin",
    },
  ],
};

export const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.newUser, ...state.users],
      };
    default:
      return state;
  }
};
