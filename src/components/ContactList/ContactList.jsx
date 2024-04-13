import React from 'react'
import Contact from '../Contacts/Contacts'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectNameFilter } from '../../redux/filters/slice';//
import ErrorMessage from '../ErrorMessage';
import { selectContactError, selectContacts } from '../../redux/contacts/slice';//



const ContactList = () => {

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  const error = useSelector(selectContactError);
  const filteredContacts = useSelector(selectFilteredContacts)

  // const filteredContacts = useMemo(
  //   () =>
  //   contacts.items.filter
  //   (contact =>
  //     contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number && contact.number.toLowerCase().includes(filter.toLowerCase())
  // ),
  // [contacts, filter]
  // )
  

  return (
    <div>
      {error && <ErrorMessage />}
      <ul className={css.contactLIst} >
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            <Contact key={contact.id} data={contact} />
          </li>
        ))}
      </ul> 
    </div>
  );
};


export default ContactList
