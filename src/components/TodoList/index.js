import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import LoadingSpinner from '../blocks/LoadingSpinner';
import styles from './style.module.scss';

const TodoList = ({
  data,
  postTodos,
  deleteTask,
  changeListItem,
}) => {
  const [taskName, setTaskName] = useState('');
  const [sortType, setSortType] = useState('default');
  // console.log(data);
  const sort = () => {
    switch (sortType) {
      case 'default':
        return data;
      case 'active':
        return data.filter(item => !item.completed);
      case 'completed':
        return data.filter(item => item.completed);
      default:
        return data;
    }
  };

  const sortedData = useMemo(sort, [sortType, data]);

  const changeSortType = () => {
    switch (sortType) {
      case 'default':
        setSortType('active');
        break;
      case 'active':
        setSortType('completed');
        break;
      case 'completed':
        setSortType('default');
        break;
      default:
        setSortType('default');
    }
  };

  // console.log(sortedData);
  return (
    <div className={styles.todoList}>
      {!sortedData ? <LoadingSpinner /> : _.sortBy(sortedData, ['title']).map(item => (
        <div key={item.uid} className={styles.todoList__row}>
          <div className={styles.todoList__row__task}>
            <div style={item.completed ? { textDecoration: 'line-through' } : {}}>
              {item.title}
            </div>
            <div>
              {`${item.completed}`}
            </div>
          </div>
          <div className={styles.todoList__row__container}>
            <button type="button" onClick={() => deleteTask(item.uid)}>D</button>
            <button type="button" onClick={() => changeListItem(item)}>C</button>
          </div>
        </div>
      ))}
      <div className={styles.todoList__addTodo}>
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
    </div>
  );
};

TodoList.propTypes = {
  data: PropTypes.any,
  postTodos: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeListItem: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  data: null,
};

export default TodoList;
