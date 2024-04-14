 import React from 'react'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm'
    
    const Contacts = () => {
      return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
      )
    }
    
    export default Contacts