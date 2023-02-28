import Home from 'components/Home';
import React from 'react';
import styles from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>A Typical Page</h1>
    </div>
  );
};

export default MainHeader;
