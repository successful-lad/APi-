import React, { useEffect, useState } from 'react';
import TodoList from 'components/TodoList';

import styles from './style.module.scss';

const FetchScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://todo-backend-sinatra.herokuapp.com/todos')
      .then(res => res.json()).then(body => setData(body));
  }, []);
  // console.log(data);

  const postTodos = (body) => {
    fetch('https://todo-backend-sinatra.herokuapp.com/todos', {
      method: 'POST',
      body: JSON.stringify(body),
    }).then(results => results.json()).then(postBody => setData([...data, postBody]));
  };

  const deleteTask = (id) => {
    fetch(`https://todo-backend-sinatra.herokuapp.com/todos/${id}`, {
      method: 'DELETE',
    }).then(() => setData([...data.filter(item => item.uid !== id)]));
  };

  const changeListItem = (item) => {
    fetch(`https://todo-backend-sinatra.herokuapp.com/todos/${item.uid}`, {
      method: 'PATCH',
      body: JSON.stringify(Object.assign(item, { completed: !item.completed })),
    });
  };
  // console.log(count);
  return (
    <div className={styles.fetchScreen}>
      <TodoList
        data={data}
        postTodos={postTodos}
        deleteTask={deleteTask}
        changeListItem={changeListItem}
      />
    </div>
  );
};

export default FetchScreen;
