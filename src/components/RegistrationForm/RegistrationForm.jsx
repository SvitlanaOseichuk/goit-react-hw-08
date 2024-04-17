import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css'


const registerSchema = Yup.object().shape({

  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Name is required'),

  email: Yup.string()
    .email('must be a valid email')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Too short')
    .required('Password is required'),
});



const INITIAL_FORM_VALUES = {
  name: '',
  email: '',
  password: ''
}


const RegisterForm = ({onRegister}) => {


  const handleSubmit = (data, formActions) => {
    onRegister(data)
    formActions.resetForm();
 }



  return(

    <Formik validationSchema={registerSchema} initialValues={INITIAL_FORM_VALUES} onSubmit={handleSubmit}>

      <Form className={css.form}>

        <div className={css.userForm}>

          <label className={css.input}>
            <span>User name:</span>
            <Field 
              type='text' 
              name='name' 
              placeholder='Jennie Kim' 
              className={css.inputData} 
            />
             <ErrorMessage name='name' component='span' className={css.ErrorMessage} />
          </label>

          <label className={css.input} >
            <span>Email:</span>
            <Field 
              type='text' 
              name='email' 
              placeholder='jenniekim@gmail.com' 
              className={css.inputData} 
            />
             <ErrorMessage name='name' component='span' className={css.ErrorMessage} />
          </label>

          <label className={css.input}>
            <span>Password:</span>
            <Field 
              type='password' 
              name='password' 
              placeholder='657uyr87' 
              className={css.inputData} 
            />
             <ErrorMessage name='name' component='span' className={css.ErrorMessage} />
          </label>

        </div>

        <button type='submit' title='click to registr user'>sign up</button>

      </Form>
    </Formik>
    );
}

export default RegisterForm