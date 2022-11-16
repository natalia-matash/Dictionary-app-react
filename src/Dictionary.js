import React, { useState } from 'react';

export default function Dictionary() {
   let [keyword, setKeyword] = useState('');

   function searchInfo(event) {
      event.preventDefault();
      alert(`You search ${keyword}`);
   }
   function handleChange(event) {
      setKeyword(event.target.value);
   }
   return (
      <div className='Dictionary'>
         <form onClick={searchInfo}>
            <input type='search' onChange={handleChange}/>
            <input type='submit' value='Search'/>
         </form>
      </div>
   )
}