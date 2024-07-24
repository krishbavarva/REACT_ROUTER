import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthentication: false,
};

const RootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('login', (state) => {
      state.isAuthentication = true;
    })
    .addCase('logout', (state) => {
      state.isAuthentication = false;
    });
});

export default RootReducer;
