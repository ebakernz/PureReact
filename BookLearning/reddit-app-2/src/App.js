import React from 'react';
import './App.css';
import Header from './Header';
import FeedPage from './FeedPage';
//import {stories} from './reddit-data.js';

class App extends React.Component {

  state = {
    stories: []
  }

  componentDidMount() {
    // to use static data:
    // this.processStories(stories.data.children);

    // To fetch live data from Reddit:
    fetch('http://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(json => this.processStories(json.data.children))
      .catch(err => console.log(err));
  }

  processStories = (stories) => {
    // let the data nicer to work with
    let storiesHash = stories.reduce( (hash, story) => {
      hash[story.data.id] = story.data;
      return hash;
    }, {});

    this.setState({
      stories: storiesHash
    });
  }

  handleUpVote = (storyID) => {
    this.setState({
      stories: {
        ...this.state.stories,
        // replace the one at 'storyID' with...
        [storyID]: {
          // all the keys/values it originally had
          ...this.state.stories[storyID],
          // replace it's votes with new value
          score: this.state.stories[storyID].score + 1
        }
      }
    });
  }

  handleDownVote = (storyID) => {
    this.setState({
      stories: {
        ...this.state.stories,
        [storyID]: {
          ...this.state.stories[storyID],
          score: this.state.stories[storyID].score - 1
        }
      }
    })
  }

  render(){
    const stories = Object.keys(this.state.stories).map(id => this.state.stories[id]);

    return(
      <div className="inner">
        <Header />

        <FeedPage 
          stories={stories}
          onAddVote={this.handleUpVote}
          onRemoveVote={this.handleDownVote} />

      </div>
    )
  }

}

export default App;