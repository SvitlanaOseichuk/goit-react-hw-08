import { createSelector, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, selectContacts } from "../contacts/slice";




const filterSlice = createSlice({

 name: "filter",
 
 initialState: INITIAL_STATE.filter, 

 reducers: {
    changeFilter(state, action) {
        state.name = action.payload;
    },
 },
});

export const { changeFilter } = filterSlice.actions;


export const filterDetailsReducer = filterSlice.reducer;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
      (contacts, filter) =>contacts.items.filter
        ((contact) =>
          contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number && contact.number.toLowerCase().includes(filter.toLowerCase())
        ),
  )