import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Content extends React.Component{
  render(){
    const bookShelves=[{key:'currentlyReading',title:'Currently Reading'},
                       {key:'wantToRead',title:'Want to Read'},
                       {key:'read',title:'Read'}];
    const {changeShelf,books}=this.props;
    return(
      <div className="list-books-content">
        <div>
         {bookShelves.map((bs)=><BookShelf key={bs.key} title={bs.title} books={books} shelfKey={bs.key} changeShelf={changeShelf}/>)}
        </div>
      </div>
    )
}}


export default Content
