const authState = {
  users: [
    {
      login: "admin",
      authorized: "false",
    },
  ],
};

export const usersReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
