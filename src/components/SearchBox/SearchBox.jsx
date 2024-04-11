import React, { useState } from 'react'
import { VscSearch } from 'react-icons/vsc';
import css from './SearchBox.module.css'
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';//



const SearchBox = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();


  const handleFilter = (event) => {
    const  value  = event.target.value;
    setValue(value);
    dispatch(changeFilter(value));
  };


  return (
    <>
    <div className={css.SearchBox}>
      <p>Find contacts by name</p>
      <label className={css.SearchContLabel}>
        <VscSearch 
          className={css.inputIcon}  
        />
        <input
          type='text' 
          value={value}
          onChange={handleFilter}

          className={css.SearchContImput} 
         />
      </label> 
    </div>
    </>
  )
}

export default SearchBox