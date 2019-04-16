import React from 'react';

import PostsPage from './PostsPage';
//import { reactjsPosts } from './static-data.js';
import './App.css';

class App extends React.Component {

  state = {
    posts: {}
  };

  componentDidMount() {
    // to use static data, uncomment this line:
    //this.processPosts(reactjsPosts.data.children);

    // To fetch live data form Reddit, use this block of code:
    fetch('http://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(json => this.processPosts(json.data.children))
      .catch(err => console.log(err));
  }

  processPosts = (posts) => {
    // make the data nicer to work with
    let postsHash = posts.reduce( (hash, post) => {
      hash[post.data.id] = post.data;
      return hash;
    }, {});

    this.setState({
      posts: postsHash
    });
  }

  handleUpVote = (postID) => {
    this.setState({
      posts: {
        ...this.state.posts,
        // replace the one at 'postID' with...
        [postID]: {
          // all the keys/values it originally had
          ...this.state.posts[postID],
          // replace it's votes with new value
          score: this.state.posts[postID].score + 1
        }
      }
    });
  }

  handleDownVote = (postID) => {
    this.setState({
      posts: {
        ...this.state.posts,
        [postID]: {
          ...this.state.posts[postID],
          score: this.state.posts[postID].score - 1
        }
      }
    });
  }

  render() {
    /* change posts array to use ids instead of hash, so can use id for key */
    const posts = Object.keys(this.state.posts).map(id => this.state.posts[id]);
    
    return (
      <div>
        <PostsPage 
          posts={posts}
          onAddVote={this.handleUpVote} 
          onRemoveVote={this.handleDownVote} />
      </div>
    );
  }
}

export default App;