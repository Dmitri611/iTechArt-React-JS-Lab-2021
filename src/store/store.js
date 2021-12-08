import { createStore } from "redux";
import { pizzasReducer } from "./pizzasReducer";

export const store = createStore(pizzasReducer);
