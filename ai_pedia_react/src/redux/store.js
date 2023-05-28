// store.js

import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
    },
});

export default store;
