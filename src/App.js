import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReddit } from './store/ducks/reddit';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subredditSelected: 'reactjs',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchReddit(this.state.subredditSelected);
  }

  handleChange(e) {
    this.setState({
      subredditSelected: e.target.value
    })
    this.props.fetchReddit(e.target.value);
  }

  render() {
    const { subreddit, fetchReddit } = this.props;
    const { isLoading, posts, error, lastUpdate } = subreddit;
    const { subredditSelected } = this.state;
    return (
      <div className="App">
        <h1>Reddit News</h1>
        <h3> Choose a subreddit: 
        <select name="subreddit" onChange={this.handleChange}>
            <option value="reactjs">ReactJS</option>
            <option value="frontend">FrontEnd</option>
          </select>
        </h3>
        { isLoading && <div>Loading...</div> }
        { error && <div>{error}</div> }
        { !isLoading && lastUpdate &&
          <div className="results">
            <h4>
              {`Last Update at ${lastUpdate}  `}
              <button type="button" onClick={() => fetchReddit(subredditSelected)}>Refresh</button>
            </h4>
            <ul>
              { 
                posts.data.children.map((({ data: { id, title } }) => (
                  <li key={id}>{title}</li>
                ))) 
              }
            </ul>
          </div>  
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subreddit: state.redditReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReddit: (subreddit) => dispatch(fetchReddit(subreddit))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
