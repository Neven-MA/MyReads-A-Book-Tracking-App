import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends React.Component{
  render(){
    const {title,books,shelfKey,changeShelf}=this.props;

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.filter(book=>book.shelf===shelfKey).map(b=><Book book={b} shelfKey={shelfKey} key={b.id} bookTitle={b.title} bookAuthors={b.authors} bookImage={b.imageLinks} changeShelf={changeShelf}/>)}
          </ol>
        </div>
      </div>
    );
}}

export default BookShelf
