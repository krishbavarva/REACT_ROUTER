import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_NAME, SET_NAME } from "./Action";

const initialState = {
  isAuthentication: false,
  name: ''
};

const RootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_NAME, (state, action) => {
      state.name = action.payload; 
    })
    .addCase(CHANGE_NAME , (state,action)=> {
      state.name = action.payload;
    })
    .addCase('login', (state) => {
      state.isAuthentication = true;
    })
    .addCase('logout', (state) => {
      state.isAuthentication = false;
    });
});

export default RootReducer;
