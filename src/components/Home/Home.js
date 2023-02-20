import MainHeader from 'components/MainHeader';
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.menu}>
        <nav style={{ position: 'fixed', top: '18px', left: '80rem' }}>
          <ul>
            <li>Users</li>
            <li>Admin</li>
          </ul>
          <button type="button">Logout</button>
        </nav>
      </div>
    </div>
  );
};

export default Home;
