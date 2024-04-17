import { createSlice, isAnyOf} from "@reduxjs/toolkit";
import { apiGetUserContacts, apiAddUserContact, apiDeleteUserContact} from "./operations";//



export const INITIAL_STATE = {
   contacts: {
      items: [],
      loader: false,
      isError: false,
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
    .addCase(apiGetUserContacts.fulfilled, (state, action) => {
      state.loader =false;
      state.isError = false;
      state.contacts.items = action.payload;
    })
    

    .addCase(apiAddUserContact.fulfilled, (state, action) => {
      state.loader = false;
      state.isError = false;
      state.contacts.items.push(action.payload);
    })


    .addCase(apiDeleteUserContact.fulfilled, (state, action) => {
      state.loader = false;
      state.isError = false;
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload.id)
    })


    // .addCase(apiChangeUserContact.fulfilled, (state, action) => {
    //   state.loader = false;
    //   state.isError = null;
    //   state.contacts.items = action.payload;
    // })
    // // поміняти логіку
    
    
    .addMatcher(
      isAnyOf(
        apiGetUserContacts.pending,
        apiAddUserContact.pending,
        apiDeleteUserContact.pending,
        // apiChangeUserContact,
        ),
      (state) => {
          state.loader = true;
          state.isError = false;
      }
  )
  
    .addMatcher(
      isAnyOf(
        apiGetUserContacts.rejected,
        apiAddUserContact.rejected,
        apiDeleteUserContact.rejected,
        // apiChangeUserContact,
        ),
      (state) => {
          state.loader = false;
          state.isError = true;
      }
  );     
},

})


export const contactDetailsReducer = contactSlice.reducer;
