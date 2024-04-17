import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { requesAddContacts, requesDeleteContacts, requesGetContacts } from "../auth/operation";


// axios.defaults.baseURL = 'https://6615444bb8b8e32ffc7a6b40.mockapi.io/';



export const apiGetUserContacts = createAsyncThunk(
    "contacts/get",
     async (_, thunkAPI) => {
        try {
            const data = await requesGetContacts();
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
  }}
);


export const apiAddUserContact = createAsyncThunk(
    "contacts/add",
     async (formData, thunkAPI) => {
        try {
          const data = await requesAddContacts(formData);
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
     }
    );
    


export const apiDeleteUserContact = createAsyncThunk(
      "contact/delete",
      async (contactId, thunkAPI) => {
        try {
          const data = await requesDeleteContacts(contactId);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
    );
    


// export const apiChangeUserContact = createAsyncThunk(
//       "contact/change",
//       async (contactId, thunkAPI) => {
//         try {
//           const data = await requesChangeContacts(contactId);
//           return data;
//         } catch (error) {
//           return thunkAPI.rejectWithValue(error.message);
//         }
//       }
//     );