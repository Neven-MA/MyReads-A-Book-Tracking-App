import React, { Component } from 'react'
import Book from './Book'

class SearchBookResult extends React.Component{

  render(){
    const {searchedbooks,changeShelf,books}=this.props;
    const bookresults=searchedbooks.map(sb=>{books.map(b=>{if(sb.id===b.id){sb.shelf=b.shelf};return b});
                                             return sb});
    console.log(bookresults);
    return(
      <div className="search-books-results">
        <ol className="books-grid">
        {bookresults.length>=0?bookresults.map(b => (
          <Book book={b} shelfKey={b.shelf?b.shelf:'none'} key={b.id} bookTitle={b.title} bookAuthors={b.authors} bookImage={b.imageLinks} changeShelf={changeShelf}/>
        )):<li/>}
        </ol>
      </div>
    )
}}

export default SearchBookResult
