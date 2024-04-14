import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';//
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import Registration from '../Pages/Registration/Registration';
import Login from '../Pages/Login/Login';
import Contacts from '../Pages/Contacts/Contacts';

const App = () => {

  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
    <Navigation />

    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register ' element={<Registration/>} />
        <Route path='/login ' element={<Login/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </main>  
   </>
  )
}

export default App
