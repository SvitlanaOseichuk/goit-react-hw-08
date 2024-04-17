import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLoginUser, apiLogoutUser, apiRefreshUser, apiRegisterUser } from "./operation";


export const INITIAL_STATE = {
    // userData: null,
    // isLoggedIn: false, 
    user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
      loader: false,
      isError: false,
}


const authSlice = createSlice({

    name: "auth",
    
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder



    .addCase(apiRegisterUser.fulfilled, (state, action ) => {
        state.loader = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })

    .addCase(apiLoginUser.fulfilled, (state, action ) => {
        state.loader = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })

    .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
    })


    .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
    })
    .addCase(apiRefreshUser.fulfilled, (state, action ) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
    })
    .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
    })


    .addMatcher(
        isAnyOf(apiRefreshUser.pending, apiLoginUser.pending, apiLogoutUser.pending),
        (state) => {
            state.loader = true;
            state.isError = false;
        }
    )
    
    .addMatcher(
        isAnyOf(apiRefreshUser.rejected, apiLoginUser.rejected, apiLogoutUser.rejected),
        (state) => {
            state.loader = false;
            state.isError = true;
        }
    )
 })



export const authReducer = authSlice.reducer;


