import redditAPI from '../../../services/redditAPI';
import * as actions from './actions';

export default function fetchReddit(subreddit) {
  return (dispatch) => { 
    dispatch(actions.request());
    return redditAPI(subreddit)
      .then((result) => dispatch(actions.receive(result)))
      .catch((error) => dispatch(actions.failedRequest(error)));
  };
}