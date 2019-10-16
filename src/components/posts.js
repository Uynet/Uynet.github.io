import PostList from './postList.js'; 
import { API } from '../utils/api.js';    
import React from 'react';
import axios from 'axios';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    axios.get(API.GET_POSTS).then(res=>{
      console.log(res.data)
      if(res.data)this.setState({posts : res.data});
    })
  }
  render() {
    return(
      <div align="center" >
          {this.state.posts.map( (post) => {
            return <PostList post={post }/>; 
          })}
      </div>
    );
  }
}
export default Posts;
