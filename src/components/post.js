//import { BrowserRouter } from 'react-router-dom'
import { API } from '../utils/api.js';    
import React from 'react';
import axios from 'axios';

export default class Post extends React.Component{
  constructor(props){ super(props)
    this.state = {post:{
      id:-1 , 
      title:"", 
      content :"" 
    }} 
  }
  setPostsById(id){
    axios.get(API.GET_POSTS).then(res=>{
      this.setState({post:res.data[id]}); 
    })
  }
  render(){
    const params = this.props.match
    const id = parseInt(params.params.id, 10)
    this.setPostsById(id);
    return(
      <div align ="center" >
      <div className="post">
      <h1>{this.state.post.title}</h1> 
      <div className="postContent">{this.state.post.content}</div> 
      </div>
      </div>
    );
  }
}
