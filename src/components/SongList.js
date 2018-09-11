import React from 'react';
import Song from '../components/Song'

const SongList = (props) => {
  //console.log(props.songs)
  const allSongs = props.songs.map(song => <Song play={props.play} key={song.id} song={song} />)
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {allSongs}
      </tbody>
    </table>
  )
}

export default SongList;
