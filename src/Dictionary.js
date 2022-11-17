import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';

export default function Dictionary() {
   let [keyword, setKeyword] = useState('');
   let [results, setResults] = useState(null);
 

   function hendleResponse(response) {
      setResults(response.data[0]);
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
         <Results results={results} />
      </div>
   )
}