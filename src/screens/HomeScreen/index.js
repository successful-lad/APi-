import React, { useEffect } from 'react';
import { useReddit } from 'hooks/api';
import BasicButton from 'components/buttons/BasicButton';

import styles from './style.module.scss';

const HomeScreen = () => {
  const { redditPosts, getReddit, redditIsFetching } = useReddit();
  const getReactReddit = () => getReddit({ redditName: 'reactjs' });
  useEffect(() => {
    getReactReddit();
  }, []);

  const postStyle = {
    padding: '15px 0',
  };

  const buttonStyle = {
    maxWidth: 100,
  };
  // console.log(getReactReddit());

  return (
    <div className={styles.homeScreen}>
      <BasicButton
        text="Click me"
        onClick={getReactReddit}
        style={buttonStyle}
        isLoading={redditIsFetching}
      />
      {
        redditPosts.map(post => (
          <div key={post.get('id')} style={postStyle}>
            {post.get('title')}
          </div>
        ))
      }
    </div>
  );
};

export default HomeScreen;
