import React, { useEffect } from 'react';
import css from './App.module.css'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import NotFound from '../pages/NotFound/NotFound';
import { Suspense } from 'react';
import { apiRefreshUser } from '../redux/auth/operations';
import RestritedRoute from './RestrictedRoute/RestritedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from './Loader';
import Layout from './Layout/Layout';

const App = () => {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);



  return (
    <>
    <Layout />

    <main className={css.main}>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={
          <RestritedRoute>
            <Registration/>
          </RestritedRoute>
        } />
        <Route path='/login' element={
          <RestritedRoute>
            <Login/>
          </RestritedRoute>
        } />
        <Route path='/contacts' element={
          <PrivateRoute>
            <Contacts/>
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes> 
      </Suspense>
    </main>  
   </>
  )
}

export default App
