import React from 'react';

import Card from '../UI/Card';
import styles from './Home.module.css';

const Home = (props) => {
  const name = localStorage.getItem('name');
  return (
    <Card className={styles['home-card']}>
      {name ? <h1>{`Welcome back, ${name}!`}</h1> : <h1>{`Welcome back!`}</h1>}
    </Card>
  );
};

export default Home;
