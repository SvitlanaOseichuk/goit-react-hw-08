import React from 'react'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm'
import css from './Contacts.module.css'
import { Helmet } from 'react-helmet-async'



const Contacts = () => {


      return (
        <div className={css.contacts}>
          <Helmet>
            <title>Contacts</title>
          </Helmet>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
      )
    }
    
    export default Contacts