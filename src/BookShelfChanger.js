import React, { Component } from 'react'

const BookShelfChanger=props=>{

const handleChange=(event)=>{
   props.changeShelf(props.book,event.target.value);
 }
 const {shelfKey}=props;
 const currentShelf=shelfKey?shelfKey:"none"
 console.log(currentShelf)
 return(
      <div className="book-shelf-changer">
        <select defaultValue={currentShelf} onChange={handleChange} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}

export default BookShelfChanger
