import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  console.log('singleSong',props.singleSong)
  return (
    <div className="karaoke-display">
      <h2>{props.singleSong.title}</h2>
      <Lyrics lyrics={props.singleSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
