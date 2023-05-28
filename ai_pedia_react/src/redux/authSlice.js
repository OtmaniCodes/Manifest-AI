import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_STORAGE_KEY } from "../utils/constants";

const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
const userInfoFromStorage = accessToken
    ? localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null
    : null;

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: userInfoFromStorage ? true : false,
        user: userInfoFromStorage,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.loggedIn = true;
            state.user = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.loggedIn = false;
            state.user = null;
            localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
            localStorage.removeItem("user");
        },
    },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
