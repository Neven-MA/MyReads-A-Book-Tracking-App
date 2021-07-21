import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'

class OpenSearch extends React.Component{
  render(){
    return(
      <div >
        <Link className="open-search"
               to='/search' >Add a book</Link>
      </div>
    )
  }
}

export default OpenSearch
