import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://6615444bb8b8e32ffc7a6b40.mockapi.io/';



export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
     async (_, thunkAPI) => {
        try {
            const {data} = await axios.get("/contacts");
            return data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message);
         }

});


export const addContact = createAsyncThunk(
    "contacts/addContact",
     async ({name, number}, thunkAPI) => {
        try {
          const {data} = await axios.post("/contacts", { name, number});
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
     }
    );
    


export const deleteContact = createAsyncThunk(
      "contact/deleteContact",
      async (id, thunkAPI) => {
        try {
          const {data} = await axios.delete(`/contacts/${id}`);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
    );
    