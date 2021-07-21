import React, { Component } from 'react'
import SearchBookBar from './SearchBookBar'
import SearchBookResult from './SearchBookResult'

class SearchBooks extends React.Component{
  render(){
    const {searchedbooks,changeShelf,books}=this.props;
    return(
      <div className="search-books">
       <SearchBookBar searchQuery={this.props.searchQuery} resetSearch={this.props.resetSearch}/>
       <SearchBookResult searchedbooks={searchedbooks} books={books} changeShelf={changeShelf}/>
      </div>
    );
  }
}

export default SearchBooks
