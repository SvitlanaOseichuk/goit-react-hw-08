import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const INITIAL_STATE = {
    userData: null,
    token: null,
    isSignedIn: false, 
    isRefreshing: false,
    loader: false,
}

