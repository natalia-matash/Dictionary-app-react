import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
   console.log(props.phonetic.audio)
   return (
      <div className='Phonetic'>
         <a href={props.phonetic.audio} target='_blank' without rel='noreferrer'>Listen</a>
         <p>{props.phonetic.text}</p>
         <ReactAudioPlayer
  src={props.phonetic.audio}
  autoPlay
  controls
/>
      </div>
   )
}