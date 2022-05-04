import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./thunk/reducers/list-reducer";
import userReducer from "./thunk/reducers/user-reducer";

const store = configureStore({
  reducer: {
    list: listReducer,
    user: userReducer,
  },
});

export default store;
