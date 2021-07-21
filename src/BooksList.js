import React, { Component } from 'react'
import Content from './Content'
import OpenSearch from './OpenSearch.js'

class BooksList extends React.Component{
  render(){
    const {changeShelf,books}=this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Content books={books} changeShelf={changeShelf}/>
        <OpenSearch/>
      </div>
    );
  }
}


export default BooksList
