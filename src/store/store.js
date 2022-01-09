import { createStore, combineReducers } from "redux";
import { pizzasReducer } from "./reducers/pizzasReducer";
import { usersReducer } from "./reducers/usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
