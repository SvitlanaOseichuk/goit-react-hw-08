import React, { useEffect } from 'react'
import Contact from '../Contacts/Contacts'
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/slice';//
import {selectContactError, selectContactLoader, selectContacts } from '../../redux/contacts/selectors';
import { apiGetUserContacts } from '../../redux/contacts/operations';
import ErrorMessage  from '../ErrorMessage';
import Loader from '../Loader'

const ContactList = () => {

  const dispatch = useDispatch()
  const filteredContacts = useSelector(selectFilteredContacts)
  const contacts = useSelector(selectContacts)
  const loader = useSelector(selectContactLoader)
  const error = useSelector(selectContactError);


  useEffect(() => {
    dispatch(apiGetUserContacts())
  },[dispatch])


  return (
    <div>
    
      <ul className={css.contactLIst} >
        {loader && <Loader/>}
        {error && <ErrorMessage/>}
        {contacts !== null &&
          filteredContacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            <Contact key={contact.id} data={contact} />
          </li>
        ))}
      </ul> 
    </div>
  );
};


export default ContactList
