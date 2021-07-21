import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import nocover from './icons/nocover.png'

class Book extends React.Component{
  render(){
    const {bookTitle,bookAuthors,bookImage,shelfKey,changeShelf,book}=this.props
    const cover=bookImage!=undefined?bookImage.thumbnail:nocover;
    const authors=bookAuthors?bookAuthors.join('\n'):"unknown";
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${cover})` }}></div>
            <BookShelfChanger shelfKey={shelfKey} bookTitle={bookTitle} changeShelf={changeShelf} book={book}/>
          </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
}}

export default Book
