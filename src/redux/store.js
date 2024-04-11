import { configureStore } from "@reduxjs/toolkit";
import { contactDetailsReducer } from "./contacts/slice";
import { filterDetailsReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    contactDetails: contactDetailsReducer,
    filterDetails: filterDetailsReducer
  },
});

