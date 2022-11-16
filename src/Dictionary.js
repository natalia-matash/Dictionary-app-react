import React, { useState } from 'react';
import axios from 'axios';

export default function Dictionary() {
   let [keyword, setKeyword] = useState('');

   function hendleResponse(response) {
      console.log(response.data);
   }

   function searchInfo(event) {
      event.preventDefault();
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(hendleResponse);
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