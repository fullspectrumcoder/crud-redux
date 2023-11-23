import { combineReducers } from "redux";
import { CrudReducer } from "../reducers/crud-reducers/CrudReducer";
import { LoginReducer, SignupReducer } from "./auth-reducer/AuthReducers";
import { ProductReducers } from "./product-reducers/ProductReducers";
import { UsersReducers } from "./users-reducers/UsersReducers";

export const RootReducers = combineReducers({
  CrudState: CrudReducer,
  SignupState: SignupReducer,
  LoginState: LoginReducer,
  UsersState: UsersReducers,
  ProductState: ProductReducers,
});
