import React, { Component } from 'react';

class Filter extends Component {
  constructor(props){
    super(props)
    //no need to be a class comp. can just have its state in karaokeContainer - less work
  }
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input  onChange={this.props.handleChange} value={this.props.filterVal} id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;
