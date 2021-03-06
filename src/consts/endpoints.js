const host = 'https://www.reddit.com/r';

export default {
  getRedditUrl: ({ redditName = 'reactjs' } = { redditName: '' }) => `${host}/${redditName}.json`,
  getTodoListUrl: () => 'https://todo-backend-sinatra.herokuapp.com/todos',
  getSwapiPeople: () => 'https://swapi.co/api/people/',
};
