import React from 'react'
import {Route,Link} from 'react-router-dom'

class CloseSearch extends React.Component{
  handleClick=()=>{
    this.props.resetSearch()
  }
  render(){
    return(
      <Link className="close-search"
             to='/' onClick={this.handleClick}>Close</Link>
    )
}}

export default CloseSearch
