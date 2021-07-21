import React, { Component } from 'react'
import CloseSearch from './CloseSearch'
import SearchInput from './SearchInput'

class SearchBookBar extends React.Component{
  render(){
    return(
      <div className="search-books-bar">
         <CloseSearch resetSearch={this.props.resetSearch}/>
         <SearchInput searchQuery={this.props.searchQuery}/>
      </div>
    )
}}

export default SearchBookBar
