import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
//import allSongs from '../data/songs';
const songURL = 'http://localhost:4000/users/3/songs'
const singleSong = 'http://localhost:4000/users/3/songs/'
class KaraokeContainer extends Component {
    constructor(){
      super()
      this.state = {
        allSongs: [],
        filteredSongs: [],
        filterVal: '',
        singleSong: []
      }
    }

    componentDidMount(){
      fetch(songURL)
      .then(r => r.json())
      .then(data => this.setState({allSongs: data, filteredSongs: data}))
    }

    handleChange = (event) => {
      this.setState({filterVal: event.target.value})
      let filtered = this.state.allSongs.filter(songs => songs.title.toLowerCase().includes(event.target.value))
      this.setState({filteredSongs: filtered})
      console.log(this.state.filterVal)
      console.log(filtered)
    }

    playSong = (props) => {
      fetch(singleSong+props.song.id)
      .then(r => r.json())
      .then(data => this.setState({singleSong: data},() => console.log(this.state.singleSong)))
    }
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange} value={this.state.filterVal} />
          <SongList play={this.playSong} songs={this.state.filteredSongs} />
        </div>
        <KaraokeDisplay singleSong={this.state.singleSong} play={this.playSong} songs={this.state.filteredSongs} />
      </div>
    );
  }
}

export default KaraokeContainer;
