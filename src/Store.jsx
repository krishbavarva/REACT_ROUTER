import { configureStore } from "@reduxjs/toolkit";
import RootReducer  from "./RootReducer";

const Store = configureStore({
    reducer : {
    root: RootReducer

    }
})


export default Store