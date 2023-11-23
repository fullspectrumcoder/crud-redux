import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { RootReducers } from "./reducers/Reducers";

export const store = createStore(RootReducers, {}, applyMiddleware(thunk));
