import React from 'react'
import css from './Contacts.module.css'
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';//

const Contact = ({data: {id, name, number}}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={css.contact}>

      <h2 className={css.contactName}>
        <IoMdContact className={css.telIcon}/>
        {name}
      </h2>

      <p className={css.contactTel} >
        <BsFillTelephoneFill className={css.telIcon}/>
        {number}
      </p>

      <button onClick={handleDelete}>Delete</button>
      
    </div>
  )
}

export default Contact

