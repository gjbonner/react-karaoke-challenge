import React from 'react';

const Song = (props) => {
  // console.log(props.song.title)
  // console.log(props.play)
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={props.play}>Play</button></td>
    </tr>
  )
}

export default Song;
