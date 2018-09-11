import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
//import allSongs from '../data/songs';
const songURL = 'http://localhost:4000/users/3/songs'
class KaraokeContainer extends Component {
    constructor(){
      super()
      this.state = {
        allSongs: [],
        filteredSongs: [],
        filterVal: ''
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

    playSong = (e) => {
      console.log(e.target)
      //onCLick works fine, cannot find way to associate with particular song.
      //tried by key, tried assigning ID both with no luck
      //would pass particular song to karaokeDisplay as props and render lyrics from there
    }
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange} value={this.state.filterVal} />
          <SongList play={this.playSong} songs={this.state.filteredSongs} />
        </div>
        <KaraokeDisplay play={this.playSong} songs={this.state.filteredSongs} />
      </div>
    );
  }
}

export default KaraokeContainer;
