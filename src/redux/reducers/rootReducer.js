import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import usersDataReducer from "./usersDataReducer";

const rootReducer = combineReducers({
  counterReducer,
  usersDataReducer,
});

export default rootReducer;
