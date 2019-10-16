import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Link } from 'react-router-dom'
import React from 'react';

class CreatePost extends React.Component {
  click(){
    console.log("unko");
  }
  render() {
    return(
      <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/post/new'>
        <div className = "editIcon"><FontAwesomeIcon icon={faEdit}/></div>
      </Link>
      </BrowserRouter>
    );
  }
}
export default CreatePost;
