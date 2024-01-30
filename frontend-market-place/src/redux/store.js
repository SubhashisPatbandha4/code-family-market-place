import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice"
import productsReducer from "./features/productsSlice"
const store = configureStore({
    reducer: {
        login: loginReducer,
        products: productsReducer,
    }
})

export default store;