import React, { Component } from 'react'

class BookShelfChanger extends React.Component{

 handleChange=(event)=>{
   this.props.changeShelf(this.props.book,event.target.value);
 }

  render(){
   const {shelfKey}=this.props;
    const currentShelf=shelfKey?shelfKey:"none"
    console.log(currentShelf)
    return(
      <div className="book-shelf-changer">
        <select defaultValue={currentShelf} onChange={this.handleChange} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}}

export default BookShelfChanger
