import React,{ Component } from 'react'
import {Route,Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { debounce } from 'throttle-debounce';
import SearchBooks from './SearchBooks'
import BooksList from './BooksList'

class BooksApp extends React.Component {

  state = {
    books:[],
    searchedbooks:[]
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{this.setState({books});
      console.log (books);})
}

  changeShelf=(book,value)=>{
   BooksAPI.update(book,value).then(result=>{
     book.shelf=value
    const updatedBooksAPI=this.state.books.filter(b=>b.title!==book.title)
    const newBooks=this.state.books.concat(book);
    this.setState({books:newBooks});
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })})
})}

searchQuery=debounce(200, false,(query)=>{
  if(query!==''){
    BooksAPI.search(query).then(result=>
      result.error||!result?this.setState({searchedbooks:[]}):this.setState({searchedbooks:result}));
        console.log(this.state.searchedbooks);
}
  else{
    this.setState({searchedbooks:[]})
  }
})

resetSearch=()=>{this.setState({searchedbooks:[]})}

  render() {
    return (
      <div className="app">
       <Route exact path='/' render={()=>(<BooksList books={this.state.books} changeShelf={this.changeShelf}/>)}/>
       <Route path='/search' render={()=>(<SearchBooks searchedbooks={this.state.searchedbooks} books={this.state.books} searchQuery={this.searchQuery} changeShelf={this.changeShelf} resetSearch={this.resetSearch}/>)}/>
      </div>
    )
  }
}

export default BooksApp
