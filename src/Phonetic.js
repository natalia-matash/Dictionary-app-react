import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Phonetics.css';

export default function Phonetic(props) {
   console.log(props.phonetic.audio)
   return (
      <div className='Phonetics'>
           <p>{props.phonetic.text}</p>
           <br />
           <br />
           <br />
           <br />
         <ReactAudioPlayer
         src={props.phonetic.audio}
         autoPlay
         controls
      />
      </div>
   )
}