const APIURL = 'https://www.reddit.com/r/'

const redditAPI = (subreddit) => (
  fetch(`${APIURL}${subreddit}.json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default redditAPI;
