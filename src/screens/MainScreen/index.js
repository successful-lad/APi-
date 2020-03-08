import React, { useEffect } from 'react';
import { useTodos } from 'hooks/api';
// import SimpleTodoList from 'components/SimpleTodoList';
import LoadingSpinner from '../../components/blocks/LoadingSpinner';
import styles from './style.module.scss';

const MainScreen = () => {
  const { todosInfo, getTodoList, todosIsFetching } = useTodos();
  const getTodosInfo = () => getTodoList();
  useEffect(() => {
    getTodosInfo();
  }, []);
  console.log(todosInfo.toJS());
  console.log(todosIsFetching);
  return (
    <div className={styles.mainScreen}>
      Имена
      <div className={styles.mainScreen__wrapper}>
        { todosIsFetching ? <LoadingSpinner /> : todosInfo.map((item) => {
          console.log(item.toJS());
          return (
            <div>{item}</div>
          );
        })}
      </div>
    </div>
  );
};

export default MainScreen;
