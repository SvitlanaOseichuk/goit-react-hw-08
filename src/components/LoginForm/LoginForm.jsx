import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css'


const loginSchema = Yup.object().shape({

  email: Yup.string()
    .email('must be a valid email')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Too short')
    .required('Password is required'),
});



const INITIAL_FORM_VALUES = {
  email: '',
  password: ''
}


const LoginForm = ({onLogin}) => {

    
      const handleSubmit = (data, formActions) => {
        onLogin(data)
        console.log('data: ', data);
        formActions.resetForm();
     }
    
    
    
      return(
    
        <Formik validationSchema={loginSchema} initialValues={INITIAL_FORM_VALUES} onSubmit={handleSubmit}>
    
          <Form className={css.form}>
    
            <div className={css.userForm}>
    
              <label className={css.input} >
                <span>Email:</span>
                <Field 
                  type='text' 
                  name='email' 
                  placeholder='jenniekim@gmail.com'  
                  className={css.inputData} 
                />
                <ErrorMessage name='email' component='span' />
              </label>
    
              <label className={css.input} >
                <span>Password:</span>
                <Field 
                  type='password' 
                  name='password' 
                  placeholder='657uyr87'  
                  className={css.inputData} 
                />
                <ErrorMessage name='password' component='span' />
              </label>
    
            </div>
    
            <button type='submit' title='click to login user'>sign in</button>
    
          </Form>
        </Formik>
        );
    }
    

export default LoginForm