import { normalize } from 'normalizr';
import { endpoints } from 'consts';
import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import * as Immutable from 'immutable';
import { todos } from 'schemas';

export default () => requestAsync({
  url: endpoints.getSwapiPeople(),
  transform: response =>
    // console.log(response.results);
    // console.log(response.results);
    normalize(response.results, todos.schemasArray).entities,
  transformResult: response => ({
    todos: normalize(response.results, todos.schemasArray).result,
  }),
  queryKey: endpoints.getSwapiPeople(),
  // meta: {
  //   authToken: true
  // },
  options: {
    headers: {
      Accept: 'application/json',
    },
  },
  update: {
    todo: (prevEntities = Immutable.Map(), newEntities) => prevEntities.mergeDeep(newEntities),
  },
  updateResult: {
    todos:
      (_, result) => result, // || => result
  },
});
