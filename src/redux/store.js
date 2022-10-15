import { createStore } from "redux";
import CounterReducer from "../reducers/counterReducer";
let store = createStore(CounterReducer);

export default store;
