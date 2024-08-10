import { createStore } from "redux";
import { reducer } from "../reducers/todoReducers";

const store = createStore(reducer);
export default store;
