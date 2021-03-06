import { normalize } from 'normalizr';
import { endpoints } from 'consts';
import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import * as Immutable from 'immutable';
import { posts } from 'schemas';

export default ({ redditName }) => requestAsync({
  url: endpoints.getRedditUrl({ redditName }),
  transform: (response) => {
    // console.log(response.data.children);
    console.log(normalize(response.data.children, posts.schemasArray).entities);
    return normalize(response.data.children, posts.schemasArray).entities;
  },
  transformResult: response => ({
    posts: normalize(response.data.children, posts.schemasArray).result,
  }),
  queryKey: endpoints.getRedditUrl(),
  // meta: {
  //   authToken: true
  // },
  options: {
    headers: {
      Accept: 'application/json',
    },
  },
  update: {
    posts: (prevEntities = Immutable.Map(), newEntities) => prevEntities.mergeDeep(newEntities),
  },
  updateResult: {
    posts:
      (_, result) => result, // || => result
  },
});
