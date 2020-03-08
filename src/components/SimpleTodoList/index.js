import React from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash';

import LoadingSpinner from '../blocks/LoadingSpinner';
import styles from './style.module.scss';

const SimpleTodoList = ({
  data,
  todosIsFetching,
}) => (
  <div className={styles.simpleTodoList}>
    {!todosIsFetching ? <LoadingSpinner /> : data.map(item => (
      <div key={item.uid} className={styles.simpleTodoList__row}>
        <div className={styles.simpleTodoList__row__task}>
          <div style={item.completed ? { textDecoration: 'line-through' } : {}}>
            {item.title}
          </div>
          <div>
            {`${item.completed}`}
          </div>
        </div>
        <div className={styles.tsimpleTodoList__row__container}>
          <button type="button" onClick={() => {}}>D</button>
          <button type="button" onClick={() => {}}>C</button>
        </div>
      </div>
    ))}
    {/* <div className={styles.simpleTodoList__addTodo}>
        <input
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          placeholder="Введите задачу"
        />
        <button type="button" onClick={changeSortType}> change sort</button>
        <button
          type="button"
          onClick={() => {
            postTodos({ title: taskName });
            setTaskName('');
          }}
        >
          Add Todo
        </button>
      </div>
      */}
  </div>
);
SimpleTodoList.propTypes = {
  data: PropTypes.any,
  todosIsFetching: PropTypes.bool,
};

SimpleTodoList.defaultProps = {
  data: [],
  todosIsFetching: false,
};

export default SimpleTodoList;
