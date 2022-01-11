import { createStore, combineReducers } from "redux";
import { pizzasReducer } from "./reducers/pizzasReducer";
import { usersReducer } from "./reducers/usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  users: usersReducer,
  authUser: authReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
