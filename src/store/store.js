import { createStore } from "redux";
import { pizzasReducer } from "./pizzasReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(pizzasReducer, composeWithDevTools());
