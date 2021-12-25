import { createStore, combineReducers } from "redux";
import { pizzasReducer } from "./pizzasReducer";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
