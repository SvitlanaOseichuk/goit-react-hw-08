import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})



//token

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const clearToken = () => {
    instance.defaults.headers.common.Authorization = '';
}



//pages

export const requestSingUp = async (formData) => {
    const {data} = await instance.post('/users/signup', formData);
    setToken(data.token)

    return data;
}



export const requestSignIn = async (formData) => {
    const {data} = await instance.post('/users/login', formData);
    setToken(data.token)

    return data;
}



export const requesGetCurrentUser = async () => {
    const {data} = await instance.get('/users/current');

    return data;
}



export const requesLogOut = async () => {
    const {data} = await instance.post('/users/logout');

    return data;
}



//contacts

export const requesGetContacts = async () => {
    const {data} = await instance.get('/contacts');

    return data;
}



export const requesAddContacts = async (formData) => {
    const {data} = await instance.post('/contacts', formData);

    return data;
}



export const requesDeleteContacts = async (contactId) => {
    const {data} = await instance.delete(`/contacts/${contactId}`);

    return data;
}



export const requesChangeContacts = async (contactId) => {
    const {data} = await instance.patch(`/contacts/${contactId}`);

    return data;
}










export const INITIAL_STATE = {
    user: {
        name: null,
        email: null,
      },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loader: false,
}




export const apiRegisterUser = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI ) => {
       try {
          const data = await requestSingUp(formData);
          return data;
       } catch(err) {
          return thunkAPI.rejectWithValue(err.message);
       }
       
    }
)

export const apiLoginUser = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI ) => {
       try {
          const data = await requestSignIn(formData);
          return data;
       } catch(err) {
          return thunkAPI.rejectWithValue(err.message);
       }
       
    }
)

export const apiRefreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI ) => {

       const state = thunkAPI.getState();
       const token = state.auth.token;

       setToken(token);

       try {
          const data = await requesGetCurrentUser();
          return data;
       } catch(err) {
          return thunkAPI.rejectWithValue(err.message);
       }
    },
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const token = state.auth.token;

            if(!token) return false;
            return true;
        }
    }
)
export const apiLogoutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI ) => {
       try {
          await requesLogOut();
          return ;
       } catch(err) {
          return thunkAPI.rejectWithValue(err.message);
       }
       
    }
)