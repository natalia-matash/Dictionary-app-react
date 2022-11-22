import React, { useState } from 'react';
import Results from './Results';
import Photos from './Photos';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary(props) {
   let [keyword, setKeyword] = useState(props.defaultKeyword);
   let [results, setResults] = useState(null);
   let [photos, setPhotos] = useState(null);
 

   function hendleResponse(response) {
      setResults(response.data[0]);
   }

   function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
   }

   function searchInfo(event) {
      event.preventDefault();
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(hendleResponse);
      
      let pexelsApiKey = '563492ad6f917000010000019ac26aa016e34155a940934cb972f5fc';
      let pexelsApi = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers = { Authorization: `Bearer ${pexelsApiKey}` }
      axios.get(pexelsApi, { headers: headers }).then(handlePexelsResponse);
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
         <Photos photos={photos} />
      </div>
   )
}