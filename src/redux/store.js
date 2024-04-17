import { configureStore } from "@reduxjs/toolkit";
import { contactDetailsReducer } from "./contacts/slice";
import { filterDetailsReducer } from "./filters/slice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";


const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    contactDetails: contactDetailsReducer,
    filterDetails: filterDetailsReducer
  },

  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, ]
    }
  })
});

export const persistor = persistStore(store);