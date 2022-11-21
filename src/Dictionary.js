import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary(props) {
   let [keyword, setKeyword] = useState(props.defaultKeyword);
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
         <section>
            <form onClick={searchInfo}>
               <input className='input' type='search' onChange={handleChange}/>
               <input className='btn' type='submit' value='Search'/>
            </form>
         </section>
         <Results results={results} />
      </div>
   )
}