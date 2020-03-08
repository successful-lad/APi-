import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { endpoints } from 'consts';
import { querySelectors } from '@digitalwing.co/redux-query-immutable';
import { useDispatch } from 'react-redux';
import { getTodoList } from 'queries/todolist';
import { getTodoListItem } from 'selectors';
import useISESelector from '../useISESelector';

const useReddit = () => {
  const todosState = useISESelector(state =>
    // console.log(state);
    ({
      todosInfo: getTodoListItem(state, 'todos'),
      todosIsFetching: querySelectors.isPending(
        state.get('queries'),
        { queryKey: endpoints.getSwapiPeople() },
      ),
    }));

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    getTodoList,
  }, dispatch),
  [dispatch]);

  return {
    ...todosState,
    ...actions,
  };
};

export default useReddit;
