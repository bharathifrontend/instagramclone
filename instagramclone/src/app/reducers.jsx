import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
// import dataReducer from "./dataReducer";
export const rootReducer = combineReducers({
  user: userSlice.reducer,
  // data: dataReducer,
});
