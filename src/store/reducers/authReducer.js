import { ENTRY_CURRENT_USER } from "../constants/constants";

const authState = {
  users: {},
};

export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case ENTRY_CURRENT_USER:
      return {
        users: action.authUser,
      };

    default:
      return state;
  }
};
