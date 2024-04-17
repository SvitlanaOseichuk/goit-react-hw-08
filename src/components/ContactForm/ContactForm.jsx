import React from 'react';
import css from './contactForm.module.css'
import { IoMdContact } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { apiAddUserContact } from '../../redux/contacts/operations';

const ContactFormSchema = Yup.object().shape({

  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Name is required'),

  number: Yup.string()
    .matches(/^\+?\d+$/, 'Invalid phone number')
    .min(3, 'Too short')
    .max(15, 'Too long')
    .required('Number is required'),
});



const INITIAL_FORM_VALUES = {
  name: '',
  number: '',
}


const ContactForm = () => {


 const dispatch = useDispatch();

 const handleSubmit = (formData, formActions) => {
  dispatch(apiAddUserContact(formData))
      formActions.resetForm();
 }




  return(

    <Formik validationSchema={ContactFormSchema} initialValues={INITIAL_FORM_VALUES} onSubmit={handleSubmit}>

      <Form  className={css.form}>

        <div className={css.ContactForm}>
          <label className={css.contactImput}>
            <span><IoMdContact className={css.telIcon}/></span>
            <Field 
              type='text' 
              name='name' 
              placeholder='Jennie Kim' 
              className={css.inputCon}
            />
            <ErrorMessage name='name' component='span' className={css.ErrorMessage} />
          </label>

          <label className={css.contactImput} >
            <span><BsFillTelephoneFill className={css.telIcon}/></span>
            <Field 
              type='tel' 
              name='number' 
              placeholder='2345678' 
              className={css.inputCon} 
            />
            <ErrorMessage name='number' component='span' className={css.ErrorMessage} />
          </label>
        </div>

        <button type='submit'>Add contact</button>

      </Form>
    </Formik>
    );
}

export default ContactForm

