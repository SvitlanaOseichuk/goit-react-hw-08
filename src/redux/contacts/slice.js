import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";//



export const INITIAL_STATE = {
   contacts: {
      items: [],
      loading: false,
      error: null
   },
   filter: {
      name: ""
    }
  }
  
  


 const contactSlice = createSlice({

 name: "contact",
 
 initialState: INITIAL_STATE,

 extraReducers: builder => {
  builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading =false;
      state.error = null;
      state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.contacts.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteContact.pending, state => {
      state.loading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload.id)
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });     
},

})


export const contactDetailsReducer = contactSlice.reducer;
