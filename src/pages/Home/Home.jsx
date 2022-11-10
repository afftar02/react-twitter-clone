import React from 'react';
import styles from './Home.module.scss';
import Navigation from '../../components/Navigation/Navigation';

function Home() {
  return (
    <>
      <Navigation />
      <div className={styles.homeContainer}>

      </div>
    </>
  )
};

export default Home;