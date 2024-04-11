import React, { useEffect } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';//

const App = () => {

  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
   </>
  )
}

export default App
