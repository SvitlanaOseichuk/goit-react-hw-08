export const selectContacts = (state) => state.contactDetails.contacts;

export const selectContactError = (state) => state.contactDetails.loader;

export const selectContactLoader = (state) => state.contactDetails.isError;