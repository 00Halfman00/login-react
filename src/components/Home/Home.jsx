import React from 'react';

import Card from '../UI/Card';
import styles from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={styles['home-card']}>
      <h1>{`Welcome back, ${props.user}!`}</h1>
    </Card>
  )
}

export default Home;
